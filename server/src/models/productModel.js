import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
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
})

const Product = mongoose.model('Product', productSchema)

export default Product
