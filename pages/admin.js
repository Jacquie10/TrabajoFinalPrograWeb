import { useEffect, useState } from "react"
import Navegacion from "../component/admin_navegacion.component"
import AdminListaClientes from "../component/clientes_listaClientes.component"
import ClienteModal from "../component/clientesModal.component"

const Admin = () =>
{
    const [debeMostarModal, setdebeMostarModal] = useState(false)
    const [modoFormulario, setModoFormulario] = useState("nuevo")
    const [listadoClientes, setListadoClientes] = useState([])
    const [cliente, setCliente] = useState(null)


    const obtenerClienteHTTP= async () => {
        const response = await fetch("/api/clientes")
        
        const data = await response.json()
        console.log(data)
        return data
    }
    useEffect( async () => {
        //hacemos una peticion al backend
        const data = await obtenerClienteHTTP()
        setListadoClientes(data.clientes)

    }, [])   


    const guardarClienteHandler = async (dni, nombre, apellido,correo, password,telefono,estado) =>
    {
        const cliente = {
            dni:dni,
            nombre:nombre,
            apellido:apellido,
            correo:correo,
            password:password,
            telefono:telefono,
            estado:estado   
        }


        const resp = await fetch("/api/clientes", {
            method: "POST",
            body:JSON.stringify(cliente)
        } )
        const data = await resp.json()
        if(data.msg == ""){
            setdebeMostarModal(false)
            const dataClientes = await obtenerClienteHTTP()
            setListadoClientes(dataClientes.clientes)
            
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
    const editarClienteHandler = async (id) =>{
        //abrir el modal cuando se aprete editar
        const resp = await fetch(`/api/clientes/${id}` )
        const data = await resp.json()
        setCliente(data.cliente) 
        setModoFormulario("edicion")
        setdebeMostarModal(true)
       
    }
    
    //------------------------------------------------------------------------
    const  actualizarClienteHandler  =  async  (id,dni, nombre, apellido,correo, password ,telefono,estado)  =>  {
        
        const cliente = {
            id:id,
            dni: dni,
            nombre:nombre,
            apellido:apellido,
            correo:correo,
            password:password,
            telefono:telefono ,
            estado:estado,
        }

        // peticion a backend para agregar un nuevo proyecto
        const  resp  =  await  fetch("/api/clientes" ,  {
            method : "PUT" ,
            body : JSON.stringify(cliente)
        } )
        const  data  =  await  resp.json()

        if  ( data.msg  ==  "" )  {
            setdebeMostarModal(false)
            const dataCliente = await obtenerClienteHTTP()
            setListadoClientes(dataCliente.cliente)
        }
    }
    //--------------------------------------------------------------------------


    return <div>
        <Navegacion/>
        <AdminListaClientes  clientes={listadoClientes} 
            onEditarCliente={editarClienteHandler}/>
        <ClienteModal mostrar={debeMostarModal} 
            modo = {modoFormulario}
            ocultar={ModalClose}  
            onGuardarCliente={guardarClienteHandler} 
            onActualizarClienteHandler = {actualizarClienteHandler}
            cliente = {cliente}/>
        <button className="mt-4"  onClick={abrirSolicitud}>Nuevo </button> 
        <div>
            <a href="/" className="btn btn-danger mb-4 mt-2">Cerrar sesión</a>
        </div>   
    </div>



}

export default Admin