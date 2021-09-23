"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _inicialSetup = require("./libs/inicialSetup");

var _shop = _interopRequireDefault(require("./routes/shop.route"));

var _auth = _interopRequireDefault(require("./routes/auth.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
(0, _inicialSetup.createRoles)();
app.use(_express["default"].json()).use((0, _morgan["default"])('dev')).use('/shop', _shop["default"]).use('/auth', _auth["default"]);
var _default = app;
exports["default"] = _default;