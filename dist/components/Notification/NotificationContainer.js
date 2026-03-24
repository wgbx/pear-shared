function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { NotificationBanner } from "./NotificationBanner";
import { notificationAtom } from "./notificationAtom";
export function NotificationContainer() {
  var notification = useAtomValue(notificationAtom);
  var setNotification = useSetAtom(notificationAtom);
  var handleClose = function handleClose() {
    setNotification(undefined);
  };
  if (!notification) {
    return null;
  }
  return /*#__PURE__*/React.createElement(NotificationBanner, _extends({}, notification, {
    onClose: handleClose
  }));
}