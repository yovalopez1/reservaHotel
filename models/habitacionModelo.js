//importar mongoose permite conectar a la db 
import mongoose from "mongoose";

//Constante para crear el modelo de datos
const Schema = mongoose.Schema

// Construyo mi modelo o esquema habitacion

const Habitacion = new Schema({
    nombre: {
        type:String,
        requiered:true
    },
    foto:{
        type:String,
        requiered:true
    },
    descripcion:{
        type:String,
        requiered:true
    },
    precio:{
        type:Number,
        requiered:true
    }
})

export const modeloHabitacion = mongoose.model('habitaciones', Habitacion)