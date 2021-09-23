"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = exports.signUp = void 0;

var _user = _interopRequireDefault(require("../models/user"));

var _role = _interopRequireDefault(require("../models/role"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, username, email, password, phone, roles, newuser, foundRoles, _foundRoles, saveuser, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, phone = _req$body.phone, roles = _req$body.roles;
            _context.t0 = _user["default"];
            _context.t1 = username;
            _context.t2 = email;
            _context.next = 6;
            return _user["default"].encryptPassword(password);

          case 6:
            _context.t3 = _context.sent;
            _context.t4 = phone;
            _context.t5 = roles;
            _context.t6 = {
              username: _context.t1,
              email: _context.t2,
              password: _context.t3,
              phone: _context.t4,
              roles: _context.t5
            };
            _context.next = 12;
            return new _context.t0(_context.t6);

          case 12:
            newuser = _context.sent;

            if (!roles) {
              _context.next = 20;
              break;
            }

            _context.next = 16;
            return _role["default"].find({
              name: {
                $in: roles
              }
            });

          case 16:
            foundRoles = _context.sent;
            newuser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 24;
            break;

          case 20:
            _context.next = 22;
            return _role["default"].findOne({
              name: 'comprador'
            });

          case 22:
            _foundRoles = _context.sent;
            newuser.roles = [_foundRoles._id];

          case 24:
            _context.next = 26;
            return newuser.save();

          case 26:
            saveuser = _context.sent;
            token = _jsonwebtoken["default"].sign({
              id: saveuser._id
            }, _config["default"].SECRET, {
              expiresIn: 43200 // 12 horas

            });
            res.status(200).json({
              token: token
            });

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var signIn = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var userfound, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _user["default"].findOne({
              username: req.body.username
            }).populate('roles');

          case 2:
            userfound = _context2.sent;

            if (userfound) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "user not found"
            }));

          case 5:
            _context2.next = 7;
            return _user["default"].comparePassword(req.body.password, userfound.password);

          case 7:
            if (_context2.sent) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: "password not valid"
            }));

          case 9:
            token = _jsonwebtoken["default"].sign({
              id: userfound._id
            }, _config["default"].SECRET, {
              expiresIn: 43200 // 12 horas

            });
            res.json({
              token: token
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signIn = signIn;