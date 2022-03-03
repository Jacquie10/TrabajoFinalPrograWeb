import { useEffect, useState } from "react"
import AdminListaDataImp from "../component/admin_listaDataImp.component"
import DataImpModal from "../component/dataImpModal.component"

const DataImp = () =>
{
    const [debeMostarModal, setdebeMostarModal] = useState(false)
    const [modoFormulario, setModoFormulario] = useState("nuevo")
    const [listadoDataImp, setListadoDataImp] = useState([])
    const [dataImp, setDataImp] = useState(null)


    const obtenerDataImpHTTP= async () => {
        const response = await fetch("/api/dataImp")
        
        const data = await response.json()
        console.log(data)
        return data
    }

    useEffect( async () => {
        //hacemos una peticion al backend
        const data = await obtenerDataImpHTTP()
        setListadoDataImp(data.datasImp)

    }, [])   


    const guardarDataImpHandler = async (cliente, cuenta,direccion, nroTransaccion) =>
    {
        const dataImp = {
            cliente:cliente,
            cuenta:cuenta,
            direccion:direccion,
            nroTransaccion:nroTransaccion   
        }


        const resp = await fetch("/api/dataImp", {
            method: "POST",
            body:JSON.stringify(dataImp)
        } )
        const data = await resp.json()
        if(data.msg == ""){
            setdebeMostarModal(false)
            const dataDataImp = await obtenerOperacionHTTP()
            setListadoDataImp(dataDataImp.datasImp)
            
        }
       
    }
    const ModalClose = () =>
    {
        setdebeMostarModal(false)
    }

    const abrirDatos = () => {
        setModoFormulario("nuevo")
        setdebeMostarModal(true)
    }
    
    const editarDataImpHandler = async (id) =>{
        //abrir el modal cuando se aprete editar
        const resp = await fetch(`/api/dataImp/${id}` )
        const data = await resp.json()
        setDataImp(dataImp.operacion) 
        setModoFormulario("edicion")
        setdebeMostarModal(true)
       
    }
    
    //------------------------------------------------------------------------
    const  actualizarDataImpHandler  =  async  (id, cliente, cuenta, direccion, nroTransaccion)  =>  {
        
        const dataImp = {
            id: id,
            cliente:cliente,
            cuenta:cuenta,
            direccion:direccion,
            nroTransaccion:nroTransaccion
        }

        // peticion a backend para agregar un nuevo proyecto
        const  resp  =  await  fetch("/api/dataImp" ,  {
            method : "PUT" ,
            body : JSON.stringify(dataImp)
        } )
        const  data  =  await  resp.json()

        if  ( data.msg  ==  "" )  {
            setdebeMostarModal(false)
            const dataDataImp = await obtenerDataImpHTTP()
            setListadoDataImp(dataDataImp.dataImp)
        }
    }
    //--------------------------------------------------------------------------


    return <div>
        <AdminListaDataImp  datas={listadoDataImp} 
            onEditarDataImp={editarDataImpHandler}/>
        <DataImpModal mostrar={debeMostarModal} 
            modo = {modoFormulario}
            ocultar={ModalClose}  
            onGuardarData={guardarDataImpHandler} 
            onActualizarDataHandler = {actualizarDataImpHandler}
            dataImp = {dataImp}/>
        <button className="mt-4"  onClick={abrirDatos}>Nuevo</button>    
    </div>
}
export default DataImp