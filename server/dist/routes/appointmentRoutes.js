'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _appointmentModel = require('../models/appointmentModel');

var _appointmentModel2 = _interopRequireDefault(_appointmentModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appointmentRouter = (0, _express.Router)();

appointmentRouter.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

appointmentRouter.route('/').get(async (req, res) => {
  try {
    const appointment = await _appointmentModel2.default.find({});
    res.json(appointment);
  } catch (err) {
    res.send(err);
  }
}).post(async (req, res) => {
  try {
    const newAppointment = await new _appointmentModel2.default(req.body);
    await newAppointment.save();
    res.status(200).redirect('back').send(newAppointment);
  } catch (err) {
    res.send(err);
  }
});

appointmentRouter.use('/:id', async (req, res, next) => {
  try {
    const appointment = await _appointmentModel2.default.findById(req.params.id);
    req.appointment = appointment;
    next();
  } catch (err) {
    res.send(err);
  }
});

appointmentRouter.route('/:id').get((req, res) => res.json(req.appointment)).delete(async (req, res) => {
  try {
    await req.product.remove();
    res.status(204).send('removed');
  } catch (err) {
    res.status(500).send(err);
  }
});

exports.default = appointmentRouter;