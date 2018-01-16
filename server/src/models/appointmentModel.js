import mongoose, { Schema } from 'mongoose'

const appointmentSchema = new Schema({
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
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

export default Appointment
