'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var alipay = require('../alipay-chunk.js');

var PluginComponent2 = index$1.createNativeComponent('sub-plugin-1');
var PluginComponent = index$1.createNativeComponent('sub-plugin-0');



var _page = function _page() {
  return /*#__PURE__*/React.createElement(alipay.View, null, /*#__PURE__*/React.createElement(PluginComponent, null), /*#__PURE__*/React.createElement(PluginComponent2, null));
};

var subPackage = Page(index$1.createPageConfig(_page));

exports.default = subPackage;
