const editarCliente = (cliente) =>
{
    const clienteStr = localStorage.getItem("clientes")
    if(clienteStr != null)
    {
        const clientes = JSON.parse(clienteStr)
        // Realiza una busqueda
        for(let cli of clientes)
        {
            if(cliente.id == cli.id)
            {
                // Actualiza datos ingresados
                cli.id = cliente.id
                cli.nombreCompleto = cliente.nombreCompleto
                cli.DNI = cliente.DNI
                cli.correo = cliente.correo
                cli.telefono = cliente.telefono
            }
            break
        }
        // Guardamos las variables en el localStorage
        localStorage.setItem("clientes", JSON.stringify(clientes))
    }
}

const guardarCliente = (id, nombreCompleto, DNI, correo, telefono) =>
{
    const cliente = 
    {
        // nombre : valor
        id : id,
        nombre : nombreCompleto,
        DNI : DNI,
        correo : correo,
        telefono : telefono
    }

    // Obtener proyectos guardados en localStorage
    const clientesStr = localStorage.getItem("clientes")
    // [{"id": 1, "nombre": "proy1", "usuario": "alisson", "rating": 4.6}, {},{}]

    if(clientesStr != null)
    {
        // parse: convierte JS a string
        const clientes = JSON.parse(clientesStr)
        // Ubicamos en el ultimo proyecto
        const ultimoId = clientes[clientes.length - 1].id

        // Modificamos el id
        cliente.id = ultimoId + 1

        // Agrega un proyecto a la lista
        clientes.push(cliente)

        localStorage.setItem("clientes", JSON.stringify(clientes))
    }
    else
    {
        // clientes: listado de clientes
        const clientes = [cliente]
        // stringify: Convierte string en JS
        localStorage.setItem("clientes", JSON.stringify(clientes))
    }
    console.log(cliente)
}

export {editarCliente, guardarCliente}