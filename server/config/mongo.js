import * as dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'

const CONNECTION_URL = process.env.DB_CONNECTION_STRING

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongo has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
    console.log('Mongo has reconnected')
})
mongoose.connection.on('error', error => {
    console.log('Mongo connection has an error', error)
    mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
    console.log('Mongo connection is disconnected')
})