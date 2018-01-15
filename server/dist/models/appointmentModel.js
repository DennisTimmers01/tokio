'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appointmentSchema = new _mongoose.Schema({
  name: {
    first: {
      type: String,
      required: 'Please enter your first name.'
    },
    last: {
      type: String,
      required: 'Please enter your last name.'
    }
  },
  email: {
    type: String,
    required: 'Please enter your email adress.'
  },
  phone: {
    type: Number
  },
  date: {
    type: Date
  }
});

const Appointment = _mongoose2.default.model('Appointment', appointmentSchema);

exports.default = Appointment;