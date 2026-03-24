function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { Stack, Typography, styled } from '@mui/material';
import { ReactComponent as BookmarkSquareIcon } from "../../svg/bookmark-square.svg";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
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
  var _slotProps$icon$width, _slotProps$icon, _slotProps$icon$heigh, _slotProps$icon2;
  var children = _ref3.children,
    description = _ref3.description,
    _ref3$icon = _ref3.icon,
    IconComponent = _ref3$icon === void 0 ? BookmarkSquareIcon : _ref3$icon,
    slotProps = _ref3.slotProps;
  return /*#__PURE__*/_jsxs(BannerContainer, _objectSpread(_objectSpread({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.root), {}, {
    children: [/*#__PURE__*/_jsx(Stack, {
      sx: {
        position: 'absolute',
        top: 0,
        right: 12
      },
      children: /*#__PURE__*/_jsx(IconComponent, _objectSpread(_objectSpread({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.icon), {}, {
        width: (_slotProps$icon$width = slotProps === null || slotProps === void 0 || (_slotProps$icon = slotProps.icon) === null || _slotProps$icon === void 0 ? void 0 : _slotProps$icon.width) !== null && _slotProps$icon$width !== void 0 ? _slotProps$icon$width : 12,
        height: (_slotProps$icon$heigh = slotProps === null || slotProps === void 0 || (_slotProps$icon2 = slotProps.icon) === null || _slotProps$icon2 === void 0 ? void 0 : _slotProps$icon2.height) !== null && _slotProps$icon$heigh !== void 0 ? _slotProps$icon$heigh : 12
      }))
    }), description ? /*#__PURE__*/_jsx(InfoBannerDescription, _objectSpread(_objectSpread({}, slotProps === null || slotProps === void 0 ? void 0 : slotProps.description), {}, {
      children: description
    })) : children]
  }));
}