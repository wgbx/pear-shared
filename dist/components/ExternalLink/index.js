var _excluded = ["children", "href", "target", "rel"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { Link, styled } from '@mui/material';
import React from 'react';
var StyledExternalLink = styled(Link, {
  name: 'ExternalLink',
  slot: 'root'
})(function () {
  return {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    color: 'inherit'
  };
});
export function ExternalLink(_ref) {
  var children = _ref.children,
    href = _ref.href,
    _ref$target = _ref.target,
    target = _ref$target === void 0 ? '_blank' : _ref$target,
    _ref$rel = _ref.rel,
    rel = _ref$rel === void 0 ? 'noopener noreferrer' : _ref$rel,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(StyledExternalLink, _extends({
    component: "a",
    href: href,
    target: target,
    rel: rel
  }, restProps), children);
}