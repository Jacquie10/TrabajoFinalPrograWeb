import db from "../sequelize/models"
const guardarOperacion = async (fecha, tipoOperacion,tipoCambio, montoFinal, estado,cliente) =>{
    //inserccion
    const guardar =  {
        fecha: fecha,
        tipoOperacion : tipoOperacion,
        tipoCambio: tipoCambio,
        montoFinal: montoFinal,
        estado:estado,
        cliente:cliente
    }
    const operacionGuardado = await db.Operacion.create( guardar )
    return operacionGuardado


}


const obtenerOperaciones = async () =>{
    //query
    const operacion = await db.Operacion.findAll()
        console.log(operacion)
    return operacion
}

const eliminarOperacion = async (id) =>{
    await db.Operacion.destroy( {
        where: {
            id: id
        }
    } )

}

const obtenerOperacion = async (id) =>{
    //query por un proyecto de determinado id
    const operacion = await db.Operacion.findOne( {
        where: {
            id:id
        }
    } )
    return operacion
}

const modificarOperacion = async (operacion) =>{
    //obtener el proyecto que esta en la base de bd
    const operacionModificar = await obtenerSolicitud(operacion.id)
    //modificar los campos
    operacionModificar.fecha = operacion.fecha
    operacionModificar.tipoOperacion = operacion.tipoOperacion
    operacionModificar.tipoCambio = operacion.tipoCambio
    operacionModificar.montoFinal = operacion.montoFinal
    operacionModificar.estado = operacion.estado
    operacionModificar.cliente = operacion.cliente


    //actualizamos proyecto en la bd
    await operacionModificar.save()

}

export {guardarOperacion, obtenerOperaciones,  eliminarOperacion,obtenerOperacion, modificarOperacion } 
