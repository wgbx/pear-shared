import { styled } from '@mui/material';
import { useMemoizedFn, useTimeout } from 'ahooks';
import { type ReactElement, useState } from 'react';
import { isPromiseLike } from '@/utils/function';
import {
  BUTTON_APPEARANCE,
  Button,
  MainButton,
  type ButtonAppearance,
} from '@/components/Button';
import { useDrawerStyleType } from './DrawerStyleTypeContext';
import { DRAWER_STYLE_TYPE, type DrawerFooterItemButtonProps } from './type';

const PENDING_CLEAR_DELAY_MS = 100;

const ERROR_ITEM_SX = {
  color: 'red.700',
  borderColor: 'red.700',
  '&:hover': {
    color: 'red.700',
    borderColor: 'red.700',
  },
} as const;

const footerItemSx = {
  flex: 1,
  minWidth: 0,
  fontWeight: 700,
} as const;

const StyledFooterItemButton = styled(Button)(() => footerItemSx);

const StyledFooterMainButton = styled(MainButton)(() => footerItemSx);

function resolveMainAppearance(
  appearance: ButtonAppearance | undefined,
  variant: DrawerFooterItemButtonProps['item']['variant'],
): ButtonAppearance {
  if (appearance) {
    return appearance;
  }
  return variant === 'contained'
    ? BUTTON_APPEARANCE.PRIMARY
    : BUTTON_APPEARANCE.OUTLINE;
}

export function DrawerFooterItemButton({
  item,
  styleType: styleTypeProp,
}: DrawerFooterItemButtonProps): ReactElement {
  const {
    label,
    onClick,
    variant = 'outlined',
    appearance,
    disabled,
    type,
    buttonProps,
  } = item;
  const styleType = useDrawerStyleType(styleTypeProp);
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
  const dangerSx = type === 'danger' ? ERROR_ITEM_SX : {};

  if (styleType === DRAWER_STYLE_TYPE.MAIN) {
    const { sx: buttonSx, ...restButtonProps } = buttonProps ?? {};

    return (
      <StyledFooterMainButton
        {...restButtonProps}
        disabled={mergedDisabled}
        loading={pending}
        appearance={resolveMainAppearance(appearance, variant)}
        label={label}
        onClick={handleClick}
        sx={{
          ...dangerSx,
          ...buttonSx,
        }}
      />
    );
  }

  return (
    <StyledFooterItemButton
      {...buttonProps}
      disabled={mergedDisabled}
      loading={pending}
      variant={variant}
      label={label}
      onClick={handleClick}
      sx={{
        ...dangerSx,
        ...buttonProps?.sx,
      }}
    />
  );
}

DrawerFooterItemButton.displayName = 'DrawerFooterItemButton';
