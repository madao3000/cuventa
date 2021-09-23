"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var shopSchema = new _mongoose.Schema({
  name: String,
  address: String,
  products: []
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Shop', shopSchema);

exports["default"] = _default;