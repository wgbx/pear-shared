'use client';

import { CloseFill } from '@mingcute/react';
import { IconButton, Stack } from '@mui/material';
import { jsx as _jsx } from "react/jsx-runtime";
export function NotificationAction(_ref) {
  var showClose = _ref.showClose,
    onClose = _ref.onClose,
    action = _ref.action,
    color = _ref.color;
  if (showClose) {
    return /*#__PURE__*/_jsx(IconButton, {
      onClick: onClose,
      size: "small",
      children: /*#__PURE__*/_jsx(CloseFill, {
        style: {
          color: "".concat(color, " !important"),
          width: '20px',
          height: '20px'
        }
      })
    });
  }
  if (action) {
    return /*#__PURE__*/_jsx(Stack, {
      sx: {
        gap: 2,
        flexDirection: 'row',
        alignItems: 'center'
      },
      children: action(onClose)
    });
  }
  return null;
}