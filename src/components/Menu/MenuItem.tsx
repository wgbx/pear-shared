import {
  Box,
  CircularProgress,
  MenuItem as MuiMenuItem,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { useBoolean } from 'ahooks';
import { isValidElement } from 'react';
import { forwardRef } from 'react';
import { isPromiseLike } from '../../utils/function';
import type { MenuItemProps } from './type';

const ICON_STYLES = {
  danger: {
    color: 'red.700',
  },
};

const StyledMenuItem = styled(MuiMenuItem, {
  name: 'PearMenu',
  slot: 'menuItem',
})(({ theme }) => ({
  minWidth: 138,
  minHeight: 44,
  height: 44,
  width: '100%',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
  mt: 1,
}));

const MenuItemStack = styled(Stack, {
  name: 'PearMenu',
  slot: 'menuItemStack',
})<{ disabled: boolean }>(({ theme, disabled }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(0.5),
  opacity: disabled ? 0.5 : 1,
  cursor: disabled ? 'not-allowed' : 'pointer',
  width: '100%',
}));

const MenuItemText = styled(Typography, {
  name: 'PearMenu',
  slot: 'menuItemText',
})(({ theme }) => ({
  fontSize: '0.875rem',
  lineHeight: '20px',
  fontWeight: 600,
  color: theme.palette.shades[900],
}));

const MenuItemIcon = styled(Box, {
  name: 'PearMenu',
  slot: 'menuItemIcon',
})(() => ({
  width: 20,
  height: 20,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& > svg': {
    width: '100%',
    height: '100%',
  },
}));

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ icon: IconComponent, label, onClick, disabled, type, slotProps }, ref) => {
    const [loading, { setTrue: startLoading, setFalse: stopLoading }] =
      useBoolean(false);
    const isDisabled = Boolean(disabled) || loading;

    const handleClick = async () => {
      if (isDisabled || !onClick) return;

      let shouldStopLoading = false;

      try {
        const result = onClick();
        if (!isPromiseLike(result)) return;

        startLoading();
        shouldStopLoading = true;
        await result;
      } finally {
        if (shouldStopLoading) {
          stopLoading();
        }
      }
    };

    const errorStyle = type ? ICON_STYLES[type] : {};

    if (isValidElement(label)) {
      return label;
    }

    return (
      <StyledMenuItem ref={ref} onClick={handleClick} disabled={isDisabled}>
        <MenuItemStack disabled={isDisabled}>
          {IconComponent ? (
            <MenuItemIcon
              sx={{
                ...errorStyle,
                ...slotProps?.icon?.sx,
              }}
            >
              <IconComponent />
            </MenuItemIcon>
          ) : null}
          <MenuItemText
            sx={{
              ...errorStyle,
              ...slotProps?.text?.sx,
            }}
          >
            {label}
          </MenuItemText>
          {loading ? (
            <MenuItemIcon sx={{ marginLeft: 'auto' }}>
              <CircularProgress size={16} thickness={5} />
            </MenuItemIcon>
          ) : null}
        </MenuItemStack>
      </StyledMenuItem>
    );
  },
);

MenuItem.displayName = 'MenuItem';
