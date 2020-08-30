"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Index = _interopRequireDefault(require("./pages/Index"));

var _Apparel = _interopRequireDefault(require("./pages/Apparel"));

var _Styles = _interopRequireDefault(require("./pages/Styles"));

var _CommodityContainer = _interopRequireDefault(require("./pages/CommodityContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  component: _Index["default"],
  exact: true,
  Name: 'Index',
  title: '主頁'
}, {
  path: '/apparel',
  component: _Apparel["default"],
  Name: 'Apparel',
  title: '服飾',
  children: [{
    path: '/apparel/:style',
    component: _Styles["default"],
    exact: true,
    Name: 'Styles',
    title: '類型'
  }, {
    path: '/apparel/:style/:aid',
    component: _CommodityContainer["default"],
    Name: 'CommodityContainer',
    title: 'XXX'
  }]
}];
var _default = routes;
exports["default"] = _default;