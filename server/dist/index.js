'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _productRoutes = require('./routes/productRoutes');

var _productRoutes2 = _interopRequireDefault(_productRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// connection to mongoDB
_mongoose2.default.connect('mongodb://localhost/tokioAPI', { useMongoClient: true });
_mongoose2.default.Promise = global.Promise;

// initiate express app
const app = (0, _express2.default)();
const port = process.env.PORT || 3000;

// Set up middleware
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

// Set up routes
app.use('/api/products', _productRoutes2.default);

// listen to port 8000 or 3000
app.listen(port);