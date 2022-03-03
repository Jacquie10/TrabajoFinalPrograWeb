import db from "../sequelize/models"
const guardarCliente = async (dni, nombre, apellido, correo, password, telefono, estado ) =>{
    //inserccion
    const guardar =  {
        dni: dni,
        nombre : nombre,
        apellido: apellido,
        correo: correo,
        password:password,
        telefono:telefono,
        estado:estado,
    }
    const clienteGuardado = await db.Cliente.create( guardar )
    return clienteGuardado


}


const obtenerClientes = async () =>{
    //query
    const cliente = await db.Cliente.findAll()
        console.log(cliente)
    return cliente
}

const eliminarCliente = async (id) =>{
    await db.Cliente.destroy( {
        where: {
            id: id
        }
    } )

}

const obtenerCliente = async (id) =>{
    //query por un proyecto de determinado id
    const cliente = await db.Cliente.findOne( {
        where: {
            id:id
        }
    } )
    return cliente
}

const modificarCliente = async (cliente) =>{
    //obtener el proyecto que esta en la base de bd
    const clienteModificar = await obtenerSolicitud(cliente.id)
    //modificar los campos
    clienteModificar.nombre = cliente.nombre
    clienteModificar.apellido = cliente.apellido
    clienteModificar.correo = cliente.correo
    clienteModificar.password = cliente.password
    clienteModificar.telefono = cliente.telefono
    clienteModificar.estado = cliente.estado


    //actualizamos proyecto en la bd
    await clienteModificar.save()

}

export {guardarCliente, obtenerClientes,  eliminarCliente,obtenerCliente, modificarCliente } 