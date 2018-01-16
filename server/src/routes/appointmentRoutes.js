import { Router } from 'express'
import Appointment from '../models/appointmentModel'

const appointmentRouter = Router()

appointmentRouter.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

appointmentRouter.route('/')
  .get(async (req, res) => {
    try {
      const appointment = await Appointment.find({})
      res.json(appointment)
    } catch (err) {
      res.send(err)
    }
  })

  .post(async (req, res) => {
    try {
      const newAppointment = await new Appointment(req.body)
      await newAppointment.save()
      res.status(200).redirect('back').send(newAppointment)
    } catch (err) {
      res.send(err)
    }
  })

appointmentRouter.use('/:id', async (req, res, next) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
    req.appointment = appointment
    next()
  } catch (err) {
    res.send(err)
  }
})

appointmentRouter.route('/:id')
  .get((req, res) => res.json(req.appointment))

  .delete(async (req, res) => {
    try {
      await req.product.remove()
      res.status(204).send('removed')
    } catch (err) {
      res.status(500).send(err)
    }
  })

export default appointmentRouter
