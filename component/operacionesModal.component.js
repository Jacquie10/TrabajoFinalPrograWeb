import { useEffect, useState } from "react"
import { Modal, Button } from "react-bootstrap"

const OperacionModal = (props) =>{
    const [idOperacion, setIdOperacion] = useState("")
    const [txtFecha, settxtFecha] = useState("")
    const [txtCliente, settxtCliente] = useState("")
    const [txttipoOperacion, settxttipoOperacion] = useState("")
    const [txtTipoCambio, settxtTipoCambio] = useState(0)
    const [txtMontoBitc, settxtMontoBitc] = useState(0)
    const [txtEstado, settxtEstado] = useState("")



    useEffect( () => {
        console.log(props.operacion)
        if(props.operacion!= null){
            setIdOperacion(props.operacion.id)

            settxtFecha(props.operacion.fecha)

            settxttipoOperacion(props.operacion.tipoOperacion)
            settxtTipoCambio(props.operacion.tipoCambio)
            settxtMontoBitc(props.operacion.montoFinal)
            settxtEstado(props.operacion.estado)
            settxtCliente(props.operacion.cliente)
            
        }
        
    }, [props.operacion])

    const txtFechaOnChange = (event) => {
        settxtFecha(event.target.value)
    }
    const txtEstadoOnChange = (event) => {
        settxtEstado(event.target.value)
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
        if(props.modo == "edicion"){
            props.onActualizarOpercionHandler(idOperacion, txtFecha, txttipoOperacion, txtTipoCambio, txtMontoBitc,txtEstado, txtCliente)

        }else{
            props.onGuardarOperacion( txtFecha, txttipoOperacion, txtTipoCambio, txtMontoBitc, txtEstado,txtCliente)

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
                        Fecha
                    </label>
                    <input className="form-control"
                        type="date" defaultValue={txtFecha}
                        onChange={txtFechaOnChange} />
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
                        type="number" defaultValue={txtMontoBitc}
                        onChange={txtMontoBitcOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Estado
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtEstado}
                        onChange={txtEstadoOnChange} />
                </div>
                <div>
                    <label className="form-label">
                        Cliente
                    </label>
                    <input className="form-control"
                        type="text" defaultValue={txtCliente}
                        onChange={txtClienteOnChange} />
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