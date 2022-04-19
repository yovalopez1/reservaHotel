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

//3.
rutas.get('/api/v1/habitaciones/id/', function (req, res) {
    res.send('Hello World')
})

//4.
rutas.put('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
})

//5.
rutas.delete('/api/v1/habitaciones/', function (req, res) {
    res.send('Hello World')
})

//6.
rutas.post('/api/v1/reserva/', function (req, res) {
    res.send('Hello World')
})

//7.
rutas.get('/api/v1/reserva/id/', function (req, res) {
    res.send('Hello World')
})

//8.
rutas.put('/api/v1/reserva/', function (req, res) {
    res.send('Hello World')
})

//9.
rutas.delete('/api/v1/reserva/', function (req, res) {
    res.send('Hello World')
})
//Rutas para los servicios de reservas