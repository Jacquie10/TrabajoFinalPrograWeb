import db from "../sequelize/models"

const guardarData = async (cliente, cuenta, direccion, nroTransaccion) =>{
    //inserccion
    const guardar =  {
        cliente: cliente,
        cuenta : cuenta,
        direccion: direccion,
        nroTransaccion: nroTransaccion
    }
    const dataGuardada = await db.Data.create( guardar )
    return dataGuardada
}

const obtenerDatas = async () =>{
    //query
    const data = await db.Data.findAll()
        console.log(data)
    return data
}

const eliminarData = async (id) =>{
    await db.Data.destroy( {
        where: {
            id: id
        }
    } )

}

const obtenerData = async (id) =>{
    //query por un proyecto de determinado id
    const data = await db.Data.findOne( {
        where: {
            id:id
        }
    } )
    return data
}

const modificarData = async (data) =>{
    //obtener el proyecto que esta en la base de bd
    const dataModificar = await obtenerData(data.id)
    //modificar los campos
    dataModificar.cliente = data.cliente
    dataModificar.cuenta = data.cuenta
    dataModificar.direccion = data.direccion
    dataModificar.nroTransaccion = data.nroTransaccion


    //actualizamos proyecto en la bd
    await dataModificar.save()

}

export {guardarData, obtenerDatas,  eliminarData, obtenerData, modificarData } 
