//importo el paquete express
//const express = require('express') forma vieja
import express from 'express'
//importar rutas del api
import { rutas } from '../routes/rutas.js'

export class Servidor{

    constructor(){
        //atributo app donde almaceno la funcionalidad de express
        this.app = express()
        this.atenderServicios()
    }

    encenderServidor(){
        this.app.get('/', function (req, res) {
            res.send('Hello World')
        })
    }

    atenderServicios(){
        this.app.use('/',rutas)
    }

    conectarconBd(){
        
    }


}