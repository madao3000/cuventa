"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteShopById = exports.updateShopById = exports.getShopById = exports.getShop = exports.createShop = void 0;

var _shop = _interopRequireDefault(require("../models/shop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createShop = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, address, products, shopadd, shopsave;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, address = _req$body.address, products = _req$body.products;
            shopadd = new _shop["default"]({
              name: name,
              address: address,
              products: products
            });
            _context.next = 4;
            return shopadd.save();

          case 4:
            shopsave = _context.sent;
            res.status(200).json(shopsave);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createShop(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createShop = createShop;

var getShop = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var shoplist;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(req.params);
            _context2.next = 3;
            return _shop["default"].find();

          case 3:
            shoplist = _context2.sent;
            res.status(200).json(shoplist);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getShop(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getShop = getShop;

var getShopById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var shopproduct;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _shop["default"].findById(req.params.shopById);

          case 2:
            shopproduct = _context3.sent;
            res.status(200).json(shopproduct);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getShopById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getShopById = getShopById;

var updateShopById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updateshop;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _shop["default"].findByIdAndUpdate(req.params.shopById, req.body, {
              "new": true // para que devuelva los datos recien actualizados

            });

          case 2:
            updateshop = _context4.sent;
            res.status(200).json(updateshop); // 204 

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateShopById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateShopById = updateShopById;

var deleteShopById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var shopdelete;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _shop["default"].findByIdAndDelete(req.params.shopById);

          case 2:
            shopdelete = _context5.sent;
            res.status(200).json(shopdelete);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteShopById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteShopById = deleteShopById;