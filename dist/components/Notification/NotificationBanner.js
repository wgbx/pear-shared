function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { AlertLine, CheckCircleLine, InformationLine, WarningLine } from '@mingcute/react';
import { Alert, AlertTitle, Snackbar, Stack } from '@mui/material';
import { useCreation, useMemoizedFn } from 'ahooks';
import React from 'react';
import { NotificationAction } from "./NotificationAction";
export var NotificationSeverity = ['success', 'warning', 'info', 'error'];
var SEVERITY_CONFIG = {
  error: {
    icon: WarningLine,
    backgroundColor: 'green.800'
  },
  success: {
    icon: CheckCircleLine,
    backgroundColor: 'green.50'
  },
  warning: {
    icon: AlertLine,
    backgroundColor: 'orange.50'
  },
  info: {
    icon: InformationLine,
    backgroundColor: '#EBF5EF'
  }
};
export function NotificationBanner(_ref) {
  var text = _ref.text,
    icon = _ref.icon,
    title = _ref.title,
    sx = _ref.sx,
    snackbarProps = _ref.snackbarProps,
    action = _ref.action,
    onClose = _ref.onClose,
    bottomAction = _ref.bottomAction,
    _ref$severity = _ref.severity,
    severity = _ref$severity === void 0 ? 'info' : _ref$severity,
    _ref$hideAfter = _ref.hideAfter,
    hideAfter = _ref$hideAfter === void 0 ? 8 : _ref$hideAfter,
    _ref$showClose = _ref.showClose,
    showClose = _ref$showClose === void 0 ? false : _ref$showClose;
  var _SEVERITY_CONFIG$seve = SEVERITY_CONFIG[severity],
    DefaultIcon = _SEVERITY_CONFIG$seve.icon,
    backgroundColor = _SEVERITY_CONFIG$seve.backgroundColor;
  var handleClickAway = useMemoizedFn(function (event) {
    onClose === null || onClose === void 0 || onClose(event, 'clickaway');
  });
  var handleActionClose = useMemoizedFn(function (event) {
    onClose === null || onClose === void 0 || onClose(event, 'timeout');
  });
  var actionNode = useCreation(function () {
    return action || showClose ? /*#__PURE__*/React.createElement(NotificationAction, {
      action: action,
      onClose: handleActionClose,
      showClose: showClose
    }) : null;
  }, [action, showClose]);
  var autoHideDuration = useCreation(function () {
    if (hideAfter !== null) {
      return hideAfter * 1000;
    }
    return null;
  }, [hideAfter]);
  return /*#__PURE__*/React.createElement(Snackbar, _extends({
    "data-track-location": "Notification",
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    ClickAwayListenerProps: {
      onClickAway: handleClickAway
    },
    autoHideDuration: autoHideDuration,
    onClose: onClose,
    open: true,
    transitionDuration: 300
  }, snackbarProps, {
    sx: _objectSpread({
      zIndex: 9999,
      pointerEvents: 'none'
    }, snackbarProps === null || snackbarProps === void 0 ? void 0 : snackbarProps.sx)
  }), /*#__PURE__*/React.createElement(Alert, {
    severity: severity,
    icon: icon !== null && icon !== void 0 ? icon : /*#__PURE__*/React.createElement(DefaultIcon, null),
    action: actionNode,
    sx: _objectSpread({
      background: backgroundColor,
      pointerEvents: 'auto',
      borderRadius: 2,
      color: 'shades.900',
      boxShadow: '0 7px 9px -4px rgba(0, 0, 0, 0.07), 0 14px 21px 2px rgba(0, 0, 0, 0.05), 0 5px 26px 4px rgba(0, 0, 0, 0.01)',
      '& .MuiAlert-action': {
        pt: 0,
        margin: 0
      }
    }, sx)
  }, /*#__PURE__*/React.createElement(Stack, {
    sx: {
      flexDirection: {
        md: 'row'
      },
      gap: 1
    }
  }, /*#__PURE__*/React.createElement(Stack, {
    sx: {
      gap: 0.5
    }
  }, title ? /*#__PURE__*/React.createElement(AlertTitle, {
    gutterBottom: Boolean(text),
    sx: {
      fontWeight: 600
    }
  }, title) : null, text !== null && text !== void 0 ? text : null), bottomAction !== null && bottomAction !== void 0 ? bottomAction : null)));
}