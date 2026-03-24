function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Stack, Typography, styled } from '@mui/material';
import { BookmarkFill } from '@mingcute/react';
var BannerContainer = styled(Stack, {
  name: 'InfoBanner',
  slot: 'root'
})(function (_ref) {
  var _theme$palette;
  var theme = _ref.theme;
  return {
    position: 'relative',
    backgroundColor: (_theme$palette = theme.palette) === null || _theme$palette === void 0 || (_theme$palette = _theme$palette.shades) === null || _theme$palette === void 0 ? void 0 : _theme$palette.a5,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1.5)
  };
});
var InfoBannerDescription = styled(Typography, {
  name: 'InfoBanner',
  slot: 'description'
})(function (_ref2) {
  var _theme$palette2;
  var theme = _ref2.theme;
  return {
    color: (_theme$palette2 = theme.palette) === null || _theme$palette2 === void 0 || (_theme$palette2 = _theme$palette2.shades) === null || _theme$palette2 === void 0 ? void 0 : _theme$palette2[900],
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1.4
  };
});
export function InfoBanner(_ref3) {
  var _slotProps$icon$size, _slotProps$icon;
  var children = _ref3.children,
    description = _ref3.description,
    _ref3$icon = _ref3.icon,
    IconComponent = _ref3$icon === void 0 ? BookmarkFill : _ref3$icon,
    slotProps = _ref3.slotProps;
  return /*#__PURE__*/React.createElement(BannerContainer, slotProps === null || slotProps === void 0 ? void 0 : slotProps.root, /*#__PURE__*/React.createElement(Stack, {
    sx: {
      position: 'absolute',
      top: 0,
      right: 12
    }
  }, /*#__PURE__*/React.createElement(IconComponent, _extends({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.icon, {
    size: (_slotProps$icon$size = slotProps === null || slotProps === void 0 || (_slotProps$icon = slotProps.icon) === null || _slotProps$icon === void 0 ? void 0 : _slotProps$icon.size) !== null && _slotProps$icon$size !== void 0 ? _slotProps$icon$size : 12
  }))), description ? /*#__PURE__*/React.createElement(InfoBannerDescription, slotProps === null || slotProps === void 0 ? void 0 : slotProps.description, description) : children);
}