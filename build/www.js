"use strict";

var _app = _interopRequireDefault(require("./app"));

var _database = _interopRequireDefault(require("./database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(3000);

console.log('servidor corriendo en el puerto 3000 ...');