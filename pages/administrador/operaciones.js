import { useState } from "react"
import AdminListaOperaciones from "../../component/admin_listaOperaciones.component"
import OperacionModal from "../../component/operacionesModal.component"

const Operaciones = () =>
{
    const listaOperaciones = 
    [
        {id : "15", fecha : "22/04/2020", hora : "22:22", cliente : "billy@hotmail", tipoOperacion : "99882627", tipoCambio: "cambio1", montoBitc:"1678945"},
        {id : "22", fecha : "10/01/2001", hora : "10:55", cliente : "andra@hotmail", tipoOperacion : "9636313", tipoCambio: "cambio2", montoBitc:"41224"},
        {id : "35", fecha : "16/02/20222", hora : "11:11", cliente : "hernan@hotmail", tipoOperacion : "81761528 ",  tipoCambio: "cambio3", montoBitc:"1457"}
    ]

    const [mostrarModal, setMostrarModal] = useState(false)

    const guardarOperacionHandler = (id, fecha, hora, cliente, tipoOperacion,tipoCambio, montoBitc) =>
    {
       
        setMostrarModal(false)
    }
    const onModalClose = () =>
    {
        setMostrarModal(false)
    }

    const editarOperacionHandler = (operacion) =>
    {
        setMostrarModal(true)
    }
    return <div>
        <AdminListaOperaciones  operaciones={listaOperaciones} onEditarOperacion={editarOperacionHandler}/>
        <OperacionModal mostrar={mostrarModal} ocultar={onModalClose}  onGuardarOperacion={guardarOperacionHandler} />
    </div>
}
export default Operaciones
