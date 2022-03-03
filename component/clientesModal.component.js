import { useEffect, useState } from "react"
import { Modal, Button } from "react-bootstrap"

const ClienteModal = (props) =>{
    const [idCliente, setIdCliente] = useState("")
    const [txtDni, settxtDni] = useState("")
    const [txtNombre, settxtNombre] = useState("")
    const [txtApellido, settxtApellido] = useState("")
    const [txtCorreo, settxtCorreo] = useState("")
    const [txtPassword, settxtPassword] = useState("")
    const [txtTelefono, settxtTelefono] = useState("")
    const [txtEstado, settxtEstado] = useState("")


    useEffect( () => {
        console.log(props.cliente)
        if(props.cliente!= null){
            setIdCliente(props.cliente.id)

            settxtDni(props.cliente.dni)

            settxtNombre(props.cliente.nombre)
            settxtApellido(props.cliente.apellido)
            settxtCorreo(props.cliente.correo)
            settxtPassword(props.cliente.password)
            settxtTelefono(props.cliente.telefono)
            settxtEstado(props.cliente.estado)
        }
        
    }, [props.cliente])

    const txtDniOnChange = (event) => {
        settxtDni(event.target.value)
    }
    const txtNombreOnChange = (event) => {
        settxtNombre(event.target.value)
    }
    

    const txtApellidoOnChange = (event) => {
        settxtApellido(event.target.value)
    }

    const txtCorreoOnChange = (event) => {
        settxtCorreo(event.target.value)
    }
    const txtPasswordOnChange = (event) => {
        settxtPassword(event.target.value)
    }

    const txtTelefonoOnChange = (event) => {
        settxtTelefono(event.target.value)
    }

    const txtEstadoOnChange = (event) => {
        settxtEstado(event.target.value)
    }

    const butGuardarCliente = () => {
        if(props.modo == "edicion"){
            props.onActualizarClienteHandler(idCliente, txtDni, txtNombre, txtApellido, txtCorreo,txtPassword, txtTelefono, txtEstado)

        }else{
            props.onGuardarCliente( txtDni, txtNombre, txtApellido, txtCorreo, txtPassword,txtTelefono,txtEstado )

        }
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
                        DNI
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtDni}
                        onChange={txtDniOnChange} />
                </div>
              
              
                <div>
                    <label className="form-label">
                        Nombre
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtNombre}
                        onChange={txtNombreOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Apellido
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtApellido}
                        onChange={txtApellidoOnChange} />
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
                        Password
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtPassword}
                        onChange={txtPasswordOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Telefono
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtTelefono}
                        onChange={txtTelefonoOnChange} />
                </div>

                <div>
                    <label className="form-label">
                        Estado
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtEstado}
                        onChange={txtEstadoOnChange} />
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
    </div>
}
export default ClienteModal