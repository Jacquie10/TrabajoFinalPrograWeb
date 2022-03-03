import { guardarCliente, modificarCliente, obtenerClientes, obtenerCliente } from "../../../dao/clientes"

const clientesHandler = async (req, res) =>{
    if (req.method == "GET") {
      
        //consultar en la base de datos
        //devolver la respuesta
        const clientes = await obtenerClientes()
        console.log(clientes)
        
        res.json({
    
            msg: "",
            clientes: clientes
        })

    }else if (req.method == "POST"){
        //registrar en la base de datos
        console.log("se debe guardar en la bd")
        const data = JSON.parse(req.body)
        console.log(data)
        await guardarCliente( data.dni,data.nombre, data.apellido, data.correo,data.password,data.telefono, data.estado )    
      
        res.json({
            msg: ""
          
        })
    }else if(req.method == "PUT"){
        const data = JSON.parse(req.body)
        await modificarCliente(data)
        res.json({
            msg: ""
        })

    }
    else{
        res.status(400).json({
            msg: "Metodo no definido"
        })
    }

}
export default clientesHandler