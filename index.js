'use strict'

require('dotenv').config();
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({
    respuesta: 'Todo super bien'
  })
})

app.listen(process.env.APP_PORT, () => {
  console.log(`Escuchando en el puerto ${process.env.APP_PORT}...`)
});
