
import { eliminarCliente, obtenerCliente } from "../../../../dao/clientes"

//path :  /api/proyectos/[id]
const clientesHandler = async (req, res) => {

    if (req.method == "DELETE"){
        const data = req.query
        console.log("se elimina "+ data.id)
        await eliminarCliente(data.id)
        res.json({
            msg: ""
        })
    }else if(req.method == "GET"){
        const data = req.query
        const cliente = await obtenerCliente(data.id)
        res.json({
            msg: "",
            cliente : cliente
        })
    }
}
export default clientesHandler