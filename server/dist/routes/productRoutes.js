'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _productModel = require('../models/productModel');

var _productModel2 = _interopRequireDefault(_productModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productRouter = (0, _express.Router)();

productRouter.route('/').get(async (req, res) => {
  try {
    const products = await _productModel2.default.find({});
    res.json(products);
  } catch (err) {
    res.send(err);
  }
}).post(async (req, res) => {
  try {
    const newProduct = await new _productModel2.default(req.body);
    await newProduct.save();
    res.status(200).send(newProduct);
  } catch (err) {
    res.send(err);
  }
});

productRouter.use('/:id', async (req, res, next) => {
  try {
    const product = await _productModel2.default.findById(req.params.id);
    req.product = product;
    next();
  } catch (err) {
    res.send(err);
  }
});

productRouter.route('/:id').get((req, res) => res.json(req.product)).put(async (req, res) => {
  const { name, brand, category, price, volume, description, releaseDate, deprecationDate, hidden } = req.body;
  try {
    req.product.name = name;
    req.product.brand = brand;
    req.product.category = category;
    req.product.price = price;
    req.product.volume = volume;
    req.product.description = description;
    req.product.release_date = releaseDate;
    req.product.deprecation_date = deprecationDate;
    req.product.hidden = hidden;
  } catch (err) {
    res.status(500).send(err);
  }
}).patch(async (req, res) => {
  try {
    if (req.body._id) delete req.body._id;
    for (const key in req.body) {
      req.product[key] = req.body[key];
    }
    await req.product.save();
    res.json(req.product);
  } catch (err) {
    res.status(500).send(err);
  }
}).delete(async (req, res) => {
  try {
    await req.product.remove();
    res.status(204).send('removed');
  } catch (err) {
    res.status(500).send(err);
  }
});

exports.default = productRouter;