import mongoose, { Schema } from 'mongoose'

const appointmentSchema = new Schema({
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
})

const Appointment = mongoose.model('Appointment', appointmentSchema)

export default Appointment
