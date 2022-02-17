import { useState } from "react"


const Paso2C = (props) => {
    const butConfirmar= () =>{
        props.siguiente2()
    }

    
    
    return  <div>
        
        <h1 className="txt-center">Paso 2 de 3</h1>
        <h5> Confirmacion de Compra </h5>   

        <form>
            <div className="mt-4">
                <label for="txt_cuent" className="form-label">Numero de Cuenta Bancaria de la pagina:</label>
                <input id="txt_cuenta" type="text" className="form-control" />
            </div>
        </form> 

        <div className="mt-4">
            <button type="button" className="btn btn-primary mt-4" onClick={butConfirmar} >
                Siguiente
            </button>
        </div>

        <button type="button" className="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Enviar Numero de Transaccion
        </button>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Numero de Transaccion de la Compra</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        N° 220420
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </div>
        </div>


</div>
}
export default Paso2C
