const Paso2C = (props) => {
    const butConfirmar= () =>{
        props.siguiente2()
    }
    
    return  <div>
        
        <h1 className="txt-center">Paso 2 de 3</h1>
        <h5 className="alert alert-warning mt-4"> Confirmacion de Compra </h5>   

        <form>
            <div className="mt-4">
                <label for="txt_cuent" className="form-label">Numero de Cuenta Bancaria de la pagina:</label>
                <div class="card">
                    <div class="card-body">
                    <label for="txt_cuent" className="form-label">202021568465416351</label>
                    </div>
                </div>
            </div>
        </form>

        <div className="row">
            <div className="col">
                <button type="button" className="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Enviar Numero de Transaccion
                </button> 
            </div>

            <div className=" col ">
                <button type="button" className="btn btn-primary mt-4" onClick={butConfirmar} >
                    Siguiente
                </button>
            </div>
        </div>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Numero de Transaccion de la Compra</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <label>Ingrese el número de transaccion</label>
                        <input className="form-control mt-2"></input>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Guardar</button>
                    </div>
                </div>
            </div>
        </div>


</div>
}
export default Paso2C
