
export class ControladorReserva{
    constructor(){}

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

    buscarPorId(request,response){
        let id = request.params.id //id que llega por url
        response.status(200).json({
            mensaje: "exito buscando reserva por id",
            datos: "datos del id:" + id,
            estado: true
        })
    }

    editar(request,response){
        let id = request.params.id //id que llega por url
        let datosPeticion = request.body
        response.status(200).json({
            mensaje: "exito editando reserva por id",
            datos: "datos del id:" + id,
            estado: true
        })
    }

    eliminar(request,response){
        let id = request.params.id //id que llega por url
        response.status(200).json({
            mensaje: "exito eliminando reserva por id",
            datos: "datos del id:" + id,
            estado: true
        })
    }
}