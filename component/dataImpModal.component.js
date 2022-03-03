import { Modal, Button } from "react-bootstrap"
import { useState } from "react"

const DataImpModal = (props) =>
{
    const [txtID, setTxtID] = useState("")
    const [txtCliente, setTxtCliente] = useState("")
    const [txtCuenta, setTxtCuenta] = useState("")
    const [txtDireccion, setTxtDireccion] = useState("")
    const [txtNroTransaccion, setTxtNroTransaccion] = useState("")

    const txtIDOnChange = (event) =>
    {
        setTxtID(event.target.value)
    }
    
    const txtClienteOnChange = (event) =>
    {
        setTxtCliente(event.target.value)
    }

    const txtCuentaOnChange = (event) =>
    {
        setTxtCuenta(event.target.value)
    }

    const txtDireccionOnChange = (event) =>
    {
        setTxtDireccion(event.target.value)
    }
    
    const txtNroTransaccionOnChange = (event) =>
    {
        setTxtNroTransaccion(event.target.value)
    }

    const butGuardarDataImp = () =>
    {
        props.onGuardarData(txtID, txtCliente, txtCuenta, txtDireccion, txtNroTransaccion)
    }

    return <Modal show={props.mostrar} onHide={props.ocultar}>
        <Modal.Header closeButton>
            <Modal.Title>Editar data importante</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <form>
                <div>
                    <label className="form-label">
                        ID
                    </label>
                    <input className="form-control"
                        type="text" //defaultValue={txtID}
                        onChange={txtIDOnChange} />
                </div>

                <div>
                    <label className="form-label">
                        Cliente
                    </label>
                    <input className="form-control"
                        type="text" //defaultValue={txtNombre}
                        onChange={txtClienteOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Cuenta
                    </label>
                    <input className="form-control"
                        type="text" //defaultValue={txtDNI}
                        onChange={txtCuentaOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Direccion
                    </label>
                    <input className="form-control"
                        type="text" //defaultValue={txtCorreo}
                        onChange={txtDireccionOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Numero de transaccion
                    </label>
                    <input className="form-control"
                        type="text" //defaultValue={txtTelefono}
                        onChange={txtNroTransaccionOnChange} />
                </div>
            </form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={props.ocultar}>Cerrar</Button>
            <Button variant="primary" onClick={butGuardarDataImp}>
                Guardar
            </Button>
        </Modal.Footer>
    </Modal>
}
export default DataImpModal