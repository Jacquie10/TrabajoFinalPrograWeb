import { useState } from "react"


const Paso1V = (props) => {

    const [] = useState("")
    const [txtcuenta, setTxtCuenta] = useState("")

    const txtcuentaOnChange = (event) => {
        setTxtCuenta(event.target.value)
    }
    const butSiguiente = () => {
        if (txtcuenta = "") {
            props.onvali(txtcuenta)
        } else {
            props.siguiente1()
        }

    }
    const butOnClick = () => {
        if (txtcuenta = "") {
            props.onvali(txtcuenta)
        }


    }


    return <body class="container">
        <h1>Paso 1 de 3</h1>
        <div id="venta">
            <h5>Solicitud de Venta</h5>

            <h5 className="mt-4">Numero de Operacion: 14</h5>


            <form>
                <div className="mt-4">
                    <label for="txt_cuent" className="form-label">Numero de Cuenta Bancaria:</label>
                    <input id="txt_cuenta" type="text" className="form-control" onChange={txtcuentaOnChange} />
                    <div className="form-text">Solo se acepta BCP</div>
                </div>
            </form>
        </div>


 



        <div className="mt-4">
            <button type="button" className="btn btn-primary mt-4" onClick={butSiguiente}  >
                Siguiente
            </button>
        </div>

        {
            (() => {
                if (props.error) {
                    return <div className="alert alert-danger mt-2">Complete los campos!</div>
                }
            })()
        }

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Operacion Confirmada</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Operacion N° 75489
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>

    </body>


}
export default Paso1V