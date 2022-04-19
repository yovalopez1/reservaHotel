import express from 'express'

export let rutas = express.Router()

//defino las rutas

//Rutas para los servicios de habitaciones
//1.Servicio agregar habitacion

rutas.post('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
})

//2. servicio para buscar todas las habitaciones

rutas.get('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
})

//Rutas para los servicios de reservas