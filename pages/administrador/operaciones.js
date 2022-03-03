import { useEffect, useState } from "react"
import AdminListaOperaciones from "../../component/admin_listaOperaciones.component"
import OperacionModal from "../../component/operacionesModal.component"

const Operaciones = () =>
{
    const [debeMostarModal, setdebeMostarModal] = useState(false)
    const [modoFormulario, setModoFormulario] = useState("nuevo")
    const [listadoOperaciones, setListadoOperaciones] = useState([])
    const [operacion, setOperacion] = useState(null)


    const obtenerOperacionHTTP= async () => {
        const response = await fetch("/api/operaciones")
        
        const data = await response.json()
        console.log(data)
        return data
    }
    useEffect( async () => {
        //hacemos una peticion al backend
        const data = await obtenerOperacionHTTP()
        setListadoOperaciones(data.operaciones)

    }, [])   


    const guardarOperacionHandler = async (fecha, tipoOperacion,tipoCambio, montoFinal,estado,cliente) =>
    {
        const operacion = {
            fecha:fecha,
            tipoOperacion:tipoOperacion,
            tipoCambio:tipoCambio,
            montoFinal:montoFinal,
            estado:estado,
            cliente:cliente   
        }


        const resp = await fetch("/api/operaciones", {
            method: "POST",
            body:JSON.stringify(operacion)
        } )
        const data = await resp.json()
        if(data.msg == ""){
            setdebeMostarModal(false)
            const dataOperaciones = await obtenerOperacionHTTP()
            setListadoOperaciones(dataOperaciones.operaciones)
            
        }
       
    }
    const ModalClose = () =>
    {
        setdebeMostarModal(false)
    }

    const abrirSolicitud = () => {
        setModoFormulario("nuevo")
        setdebeMostarModal(true)
    }
    const editarOperacionHandler = async (id) =>{
        //abrir el modal cuando se aprete editar
        const resp = await fetch(`/api/operaciones/${id}` )
        const data = await resp.json()
        setOperacion(data.operacion) 
        setModoFormulario("edicion")
        setdebeMostarModal(true)
       
    }
    
    //------------------------------------------------------------------------
    const  actualizarOperacionHandler  =  async  (id,fecha, tipoOperacion,tipoCambio, montoFinal ,estado,cliente)  =>  {
        
        const operacion = {
            id: id,
            fecha:fecha,
            tipoOperacion:tipoOperacion,
            tipoCambio:tipoCambio,
            montoFinal:montoFinal ,
            estado:estado,
            cliente:cliente
        }

        // peticion a backend para agregar un nuevo proyecto
        const  resp  =  await  fetch("/api/operaciones" ,  {
            method : "PUT" ,
            body : JSON.stringify(operacion)
        } )
        const  data  =  await  resp.json()

        if  ( data.msg  ==  "" )  {
            setdebeMostarModal(false)
            const dataOperacion = await obtenerOperacionHTTP()
            setListadoOperaciones(dataOperacion.operacion)
        }
    }
    //--------------------------------------------------------------------------


    return <div>
        <AdminListaOperaciones  operaciones={listadoOperaciones} 
            onEditarOperacion={editarOperacionHandler}/>
        <OperacionModal mostrar={debeMostarModal} 
            modo = {modoFormulario}
            ocultar={ModalClose}  
            onGuardarOperacion={guardarOperacionHandler} 
            onActualizarOperacionHandler = {actualizarOperacionHandler}
            operacion = {operacion}/>
        <button className="mt-4"  onClick={abrirSolicitud}>Nuevo </button>    
    </div>
}
export default Operaciones