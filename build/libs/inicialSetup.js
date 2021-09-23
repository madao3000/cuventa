"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoles = void 0;

var _role = _interopRequireDefault(require("../models/role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createRoles = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var count, values;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _role["default"].estimatedDocumentCount();

          case 2:
            count = _context.sent;

            if (!(count > 0)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return");

          case 5:
            _context.next = 7;
            return Promise.all([new _role["default"]({
              name: 'comprador'
            }).save(), new _role["default"]({
              name: 'vendedor'
            }).save(), new _role["default"]({
              name: 'comerciante'
            }).save()]);

          case 7:
            values = _context.sent;
            console.log('roles creados: ' + values);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createRoles() {
    return _ref.apply(this, arguments);
  };
}();

exports.createRoles = createRoles;