//importar mongoose permite conectar a la db 
import mongoose from "mongoose";

//Constante para crear el modelo de datos
const Schema = mongoose.Schema

// Construyo mi modelo o esquema habitacion

const Reserva = new Schema({
    fechaIn: {
        type:Date,
        requiered:true
    },
    fechaOut:{
        type:Date,
        requiered:true
    },
    nombre:{
        type:String,
        requiered:true
    },
    cedulaCliente:{
        type:String,
        requiered:true
    },
    costo:{
        type:Number,
        requiered:true
    }
})

export const modeloReserva = mongoose.model('reservas', Reserva)