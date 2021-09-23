"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWorker = exports.isShopkeeper = exports.verifyToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _user = _interopRequireDefault(require("../models/user"));

var _role = _interopRequireDefault(require("../models/role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifyToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, decoded, userfound;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers['x-access-token'];

            if (token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              message: 'no token provided'
            }));

          case 4:
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            req.userId = decoded.id;
            _context.next = 8;
            return _user["default"].findById(req.userId, {
              password: 0
            });

          case 8:
            userfound = _context.sent;
            console.log(userfound);

            if (userfound) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "user not found"
            }));

          case 12:
            next();
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(401).json({
              message: "unauthorized"
            }));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;

var isShopkeeper = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var users, roles, i;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _user["default"].findById(req.userId);

          case 2:
            users = _context2.sent;
            _context2.next = 5;
            return _role["default"].find({
              _id: {
                $in: users.roles
              }
            });

          case 5:
            roles = _context2.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context2.next = 14;
              break;
            }

            if (!(roles[i] === "comerciante")) {
              _context2.next = 11;
              break;
            }

            next();
            return _context2.abrupt("return");

          case 11:
            i++;
            _context2.next = 7;
            break;

          case 14:
            return _context2.abrupt("return", res.status(403).json({
              message: "Require Shopkeeper role"
            }));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function isShopkeeper(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isShopkeeper = isShopkeeper;

var isWorker = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var users, roles, i;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _user["default"].findById(req.userId);

          case 2:
            users = _context3.sent;
            _context3.next = 5;
            return _role["default"].find({
              _id: {
                $in: users.roles
              }
            });

          case 5:
            roles = _context3.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context3.next = 14;
              break;
            }

            if (!(roles[i] === "trabajador")) {
              _context3.next = 11;
              break;
            }

            next();
            return _context3.abrupt("return");

          case 11:
            i++;
            _context3.next = 7;
            break;

          case 14:
            return _context3.abrupt("return", res.status(403).json({
              message: "Require Worker role"
            }));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function isWorker(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.isWorker = isWorker;