import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import productRouter from './routes/productRoutes'

// connection to mongoDB
mongoose.connect('mongodb://localhost/tokioAPI', { useMongoClient: true })
mongoose.Promise = global.Promise

// initiate express app
const app = express()
const port = process.env.PORT || 3000

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Set up routes
app.use('/api/products', productRouter)

// listen to port 8000 or 3000
app.listen(port)
