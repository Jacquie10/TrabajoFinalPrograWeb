import { eliminarOperacion, obtenerOperacion } from "../../../../dao/operaciones"

//path :  /api/proyectos/[id]
const operacionesHandler = async (req, res) => {

    if (req.method == "DELETE"){
        const data = req.query
        console.log("se elimina "+ data.id)
        await eliminarOperacion(data.id)
        res.json({
            msg: ""
        })
    }else if(req.method == "GET"){
        const data = req.query
        const operacion = await obtenerOperacion(data.id)
        res.json({
            msg: "",
            operacion : operacion
        })
    }
}
export default operacionesHandler