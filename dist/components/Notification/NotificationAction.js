'use client';

import { CloseFill } from '@mingcute/react';
import { IconButton, Stack } from '@mui/material';
import React from 'react';
export function NotificationAction(_ref) {
  var showClose = _ref.showClose,
    onClose = _ref.onClose,
    action = _ref.action,
    color = _ref.color;
  if (showClose) {
    return /*#__PURE__*/React.createElement(IconButton, {
      onClick: onClose,
      size: "small"
    }, /*#__PURE__*/React.createElement(CloseFill, {
      style: {
        color: "".concat(color, " !important"),
        width: '20px',
        height: '20px'
      }
    }));
  }
  if (action) {
    return /*#__PURE__*/React.createElement(Stack, {
      sx: {
        gap: 2,
        flexDirection: 'row',
        alignItems: 'center'
      }
    }, action(onClose));
  }
  return null;
}