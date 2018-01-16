'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appointmentSchema = new _mongoose.Schema({
  firstname: {
    type: String,
    required: 'Please enter your first name.'
  },
  lastname: {
    type: String,
    required: 'Please enter your last name.'
  },
  email: {
    type: String,
    required: 'Please enter your email adress.'
  },
  phone_number: {
    type: Number
  },
  pickup_date: {
    type: Date
  }
});

const Appointment = _mongoose2.default.model('Appointment', appointmentSchema);

exports.default = Appointment;