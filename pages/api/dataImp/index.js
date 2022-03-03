import { guardarData, modificarData, obtenerData, obtenerDatas } from "../../../dao/dataImp"

const datasHandler = async (req, res) =>{
    if (req.method == "GET") {
      
        //consultar en la base de datos
        //devolver la respuesta
        const datasImp = await obtenerDatas()
        console.log(datasImp)
        
        res.json({
    
            msg: "",
            datasImp: datasImp
        })
       

    }else if (req.method == "POST"){
        //registrar en la base de datos
        console.log("se debe guardar en la bd")
        const data = JSON.parse(req.body)
        console.log(data)
        await guardarData( data.cliente,data.cuenta, data.direccion, data.nroTransaccion)    
      
        res.json({
            msg: ""
          
        })
    }else if(req.method == "PUT"){
        const data = JSON.parse(req.body)
        await modificarData(data)
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
export default datasHandler