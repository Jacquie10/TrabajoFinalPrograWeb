import { eliminarData, obtenerData } from "../../../../dao/dataImp"

//path :  /api/proyectos/[id]
const datasHandler = async (req, res) => {

    if (req.method == "DELETE"){
        const data = req.query
        console.log("se elimina "+ data.id)
        await eliminarData(data.id)
        res.json({
            msg: ""
        })
    }else if(req.method == "GET"){
        const data = req.query
        const dataImp = await obtenerData(data.id)
        res.json({
            msg: "",
            dataImp : dataImp
        })
    }
}
export default datasHandler