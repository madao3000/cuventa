"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect('mongodb://127.0.0.1:27017/cuventas', {
  //useNewUrlParse: true,
  useUnifiedTopology: true
}).then(function (db) {
  console.log("Base de datos conectada");
})["catch"](function (err) {
  if (err) throw err;
});