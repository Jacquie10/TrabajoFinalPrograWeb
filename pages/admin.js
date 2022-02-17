import { useState } from "react"
import Navegacion from "../component/admin_navegacion.component"
import { editarCliente, guardarCliente } from "../dao/funciones"
import ClienteModal from "../component/modal_admin.component"

const Admin = () =>
{
    const listaClientes = 
    [
        {id : "1", nombreCompleto : "Billy", DNI : "9173521", correo : "billy@hotmail", telefono : "99882627"},
        {id : "2", nombreCompleto : "Andra", DNI : "467423", correo : "andra@hotmail", telefono : "9636313"},
        {id : "3", nombreCompleto : "Hernan", DNI : "121324", correo : "hernan@hotmail", telefono : "81761528"}
    ]

    const [mostrarModal, setMostrarModal] = useState(false)

    const onModalClose = () =>
    {
        setMostrarModal(false)
    }

    const editarClienteHandler = (cliente) =>
    {
        editarCliente(cliente)
        setMostrarModal(true)
    }

    const guardarClienteHandler = (id, nombreCompleto, DNI, correo, telefono) =>
    {
        guardarCliente(id, nombreCompleto, DNI, correo, telefono)
        // location.reload(): recarga la pagina
        // Una vez guardado, cerrar el modal
        setMostrarModal(false)
    }

    const filtrarCliente = (palabra) =>
    {
        console.log(palabra)
    }

    return <div>
        <Navegacion clientes={listaClientes} onEditarCliente={editarClienteHandler}/>
        <ClienteModal mostrar={mostrarModal} ocultar={onModalClose}
            onGuardarCliente={guardarClienteHandler}
            onFiltrar={filtrarCliente}/>
    </div>
}
export default Admin