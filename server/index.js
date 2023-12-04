import express from 'express'
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose'
import cors from 'cors'
import petsRoute from './routes/petRoutes.js'

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  console.log(req)
  return res.status(234).send('Welcome to the Pet Store!')
})

app.use('/pets', petsRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to the database')
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })
