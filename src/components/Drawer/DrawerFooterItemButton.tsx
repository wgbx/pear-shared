import { styled } from '@mui/material';
import { useMemoizedFn, useTimeout } from 'ahooks';
import { type ReactElement, useState } from 'react';
import { isPromiseLike } from '../../utils/function';
import { Button } from '../Button';
import { type DrawerFooterItemButtonProps } from './type';

const PENDING_CLEAR_DELAY_MS = 100;

const ERROR_ITEM_SX = {
  color: 'red.700',
  borderColor: 'red.700',
  '&:hover': {
    color: 'red.700',
    borderColor: 'red.700',
  },
} as const;

const StyledFooterItemButton = styled(Button)(() => ({
  flex: 1,
  minWidth: 0,
  fontWeight: 700,
}));

export function DrawerFooterItemButton({
  item,
}: DrawerFooterItemButtonProps): ReactElement {
  const {
    label,
    onClick,
    variant = 'outlined',
    disabled,
    type,
    buttonProps,
  } = item;
  const [pending, setPending] = useState(false);
  const [clearPendingDelay, setClearPendingDelay] = useState<
    number | undefined
  >(undefined);

  const finishPendingClear = useMemoizedFn(() => {
    setPending(false);
    setClearPendingDelay(undefined);
  });

  useTimeout(finishPendingClear, clearPendingDelay);

  const handleClick = useMemoizedFn(async () => {
    const result = onClick?.();
    if (!isPromiseLike(result)) {
      return result;
    }
    setClearPendingDelay(undefined);
    setPending(true);
    try {
      await result;
      return result;
    } finally {
      setClearPendingDelay(PENDING_CLEAR_DELAY_MS);
    }
  });

  const mergedDisabled =
    Boolean(disabled) || Boolean(buttonProps?.disabled) || pending;

  return (
    <StyledFooterItemButton
      {...buttonProps}
      disabled={mergedDisabled}
      loading={pending}
      variant={variant}
      label={label}
      onClick={handleClick}
      sx={{
        ...(type === 'danger' ? ERROR_ITEM_SX : {}),
        ...buttonProps?.sx,
      }}
    />
  );
}

DrawerFooterItemButton.displayName = 'DrawerFooterItemButton';
