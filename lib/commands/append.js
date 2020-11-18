"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.append = append;

var _buffer = _interopRequireDefault(require("../buffer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function append(key, value) {
  if (!this.data.has(key)) {
    this.data.set(key, '');
  }

  if (value instanceof Buffer) {
    this.data.set(key, Buffer.concat([(0, _buffer.default)(this.data.get(key)), value]));
  } else {
    this.data.set(key, this.data.get(key) + value);
  }

  return this.data.get(key).length;
}