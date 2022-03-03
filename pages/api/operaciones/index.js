import { guardarOperacion, modificarOperacion, obtenerOperacion, obtenerOperaciones } from "../../../dao/operaciones"

const operacionesHandler = async (req, res) =>{
    if (req.method == "GET") {
      
        //consultar en la base de datos
        //devolver la respuesta
        const operaciones = await obtenerOperaciones()
        console.log(operaciones)
        
        res.json({
    
            msg: "",
            operaciones: operaciones
        })

     
       

    }else if (req.method == "POST"){
        //registrar en la base de datos
        console.log("se debe guardar en la bd")
        const data = JSON.parse(req.body)
        console.log(data)
        await guardarOperacion( data.fecha,data.tipoOperacion, data.tipoCambio, data.montoFinal,data.estado,data.cliente )    
      
        res.json({
            msg: ""
          
        })
    }else if(req.method == "PUT"){
        const data = JSON.parse(req.body)
        await modificarOperacion(data)
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
export default operacionesHandler