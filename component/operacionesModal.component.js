import { useState } from "react"
import { Modal, Button } from "react-bootstrap"

const OperacionModal = (props) =>{
    const [txtID, setTxtID] = useState("")
    const [txtFecha, settxtFecha] = useState("")
    const [txtHora, settxtHora] = useState("")
    const [txtCliente, settxtCliente] = useState("")
    const [txttipoOperacion, settxttipoOperacion] = useState("")
    const [txtTipoCambio, settxtTipoCambio] = useState("")
    const [txtMontoBitc, settxtMontoBitc] = useState(0)

    const txtIDOnChange = (event) => {
        setTxtID(event.target.value)
    }

    const txtFechaOnChange = (event) => {
        settxtFecha(event.target.value)
    }

    const txtHoraOnChange = (event) => {
        settxtHora(event.target.value)
    }

    const txtClienteOnChange = (event) => {
        settxtCliente(event.target.value)
    }

    const txttipoOperacionOnChange = (event) => {
        settxttipoOperacion(event.target.value)
    }
    const txtTipoCambioOnChange = (event) => {
        settxtTipoCambio(event.target.value)
    }

    const txtMontoBitcOnChange = (event) => {
        settxtMontoBitc(event.target.value)
    }

    const butGuardarOperacion = () => {
        props.onGuardarOperacion(txtID, txtFecha, txtHora, txtCliente, txttipoOperacion, txtTipoCambio, txtMontoBitc)
    }
    return <div>
         <Modal show={props.mostrar} onHide={props.ocultar}>
        <Modal.Header closeButton>
            <Modal.Title>Editar cliente</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form>
                <div>
                    <label className="form-label">
                        ID
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtID}
                        onChange={txtIDOnChange} />
                </div>

                <div>
                    <label className="form-label">
                        Fecha
                    </label>
                    <input className="form-control"
                        type="date" defaultValue={txtFecha}
                        onChange={txtFechaOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Hora
                    </label>
                    <input className="form-control"
                        type="time" defaultValue={txtHora}
                        onChange={txtHoraOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Cliente
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtCliente}
                        onChange={txtClienteOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Tipo de Operacion
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txttipoOperacion}
                        onChange={txttipoOperacionOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Tipo de Cambio
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtTipoCambio}
                        onChange={txtTipoCambioOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Monto BTC
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtMontoBitc}
                        onChange={txtMontoBitcOnChange} />
                </div>
            </form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={props.ocultar}>Cerrar</Button>
            <Button variant="primary" onClick={butGuardarOperacion}>
                Guardar
            </Button>
        </Modal.Footer>
    </Modal>
    </div>
}
export default OperacionModal