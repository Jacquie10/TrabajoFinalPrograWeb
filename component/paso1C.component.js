import { useState } from "react"


const Paso1C = (props) => {
    
    const [] = useState("")
    const [txtcuenta, setTxtCuenta] = useState("")

    const butSiguiente = () =>{
        props.siguiente1()
        
    }

    
    return <div>
        <body className="container">
            <h1>Paso 1 de 3</h1>  

            <h5 className="mt-4">Numero de Operacion: 22</h5>

            <div id="compra">
                <h5>Solicitud de Compra</h5>
                <form>
                    <div>
                        <label htmlFor="txt_cuent" className="form-label">Dirección de billetera:</label>
                        <input id="txt_cuenta" type="text" className="form-control"/>
                    </div>
                </form>
            </div>
            
           
            
            <div className="mt-4">
                <button type="button" className="btn btn-primary mt-4" onClick={butSiguiente}  >
                    Siguiente
                </button>
            </div>



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
    </div>
}
export default Paso1C