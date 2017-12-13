'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: 'Please enter the name of the product.'
  },
  brand: {
    type: String,
    required: 'Please enter a brand name.'
  },
  category: {
    type: String,
    required: 'Please select a category.'
  },
  price: {
    type: Number,
    required: 'Please enter the product price'
  },
  volume: {
    type: Number
  },
  description: {
    body: String,
    specifications: [String]
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  release_date: {
    type: Date
  },
  deprecation_date: {
    type: Date
  },
  hidden: {
    type: Boolean,
    default: false
  }
});

const Product = _mongoose2.default.model('Product', productSchema);

exports.default = Product;