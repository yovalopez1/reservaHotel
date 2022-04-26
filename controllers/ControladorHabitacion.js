//el controlador tiene la logica del negocio(que tiene que hacer)
export class ControladorHabitacion{
    constructor(){

    }

    insertar(request,response){
        //recibir los datos de la peticion
        let datosPeticion = request.body

        //conexion a la db

        //ejecuto la consulta(insert)

        //envio respuesta
        response.status(200).json({
            mensaje: "exito en el ingreso de datos",
            datosIngresados: datosPeticion,
            estado: true
        })
    }

    buscarTodos(request,response){
        let datosPrueba = [{nombre:"habi1", precio:"400000"},{nombre:"habi2",precio:"420000"}]//quitar cuando tengamos db
        response.status(200).json({
            mensaje: "exito buscando la habitacion",
            datos: datosPrueba,
            estado: true
        })
    }

    buscarPorId(request,response){
        let id = request.params.id //id que llega por url
        response.status(200).json({
            mensaje: "exito buscando la habitacion por id",
            datos: "datos del id:" + id,
            estado: true
        })
    }

    editar(request,response){
        let id = request.params.id //id que llega por url
        let datosPeticion = request.body
        response.status(200).json({
            mensaje: "exito editando habitacion por id",
            datos: "datos del id:" + id,
            estado: true
        })
    }

    eliminar(request,response){
        let id = request.params.id //id que llega por url
        response.status(200).json({
            mensaje: "exito eliminando habitacion por id",
            datos: "datos del id:" + id,
            estado: true
        })
    }
}