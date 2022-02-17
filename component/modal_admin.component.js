import { Modal, Button } from "react-bootstrap"
import { useState } from "react"

const ClienteModal = (props) =>
{
    const [txtID, setTxtID] = useState("")
    const [txtNombre, setTxtNombre] = useState("")
    const [txtDNI, setTxtDNI] = useState("")
    const [txtCorreo, setTxtCorreo] = useState("")
    const [txtTelefono, setTxtTelefono] = useState("")

    const txtIDOnChange = (event) =>
    {
        setTxtID(event.target.value)
    }
    
    const txtNombreOnChange = (event) =>
    {
        setTxtNombre(event.target.value)
    }

    const txtDNIOnChange = (event) =>
    {
        setTxtDNI(event.target.value)
    }

    const txtCorreoOnChange = (event) =>
    {
        setTxtCorreo(event.target.value)
    }
    
    const txtTelefonoOnChange = (event) =>
    {
        setTxtTelefono(event.target.value)
    }

    const butGuardarCliente = () =>
    {
        props.onGuardarCliente(txtID, txtNombre, txtDNI, txtCorreo, txtTelefono)
    }

    return <Modal show={props.mostrar} onHide={props.ocultar}>
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
                        Nombres Completos
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtNombre}
                        onChange={txtNombreOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        DNI
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtDNI}
                        onChange={txtDNIOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Correo
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtCorreo}
                        onChange={txtCorreoOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Telefono
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtTelefono}
                        onChange={txtTelefonoOnChange} />
                </div>
            </form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={props.ocultar}>Cerrar</Button>
            <Button variant="primary" onClick={butGuardarCliente}>
                Guardar
            </Button>
        </Modal.Footer>
    </Modal>
}
export default ClienteModal