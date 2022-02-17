const Paso2V = (props) => {

    const butConfirmar = () => {
        props.siguiente2()
    }
    return <div>
        <h1 className="txt-center">Paso 2 de 3</h1>
        <h5> Confirmacion de Venta </h5>

        <h5 className="mt-4">Numero de Operacion: 15</h5>
        
        <form>
            <div className="row mt-4">
                <div className="col-md-4">
                      <label for="" className="form-label">Direccion de la billetera de la pagina:    </label>
                </div>
                <div className="col">
                    <a href="/" className="btn btn-link">Direccion billetera</a>
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
                        <h5 className="modal-title" id="exampleModalLabel">Numero de Transaccion de la Venta</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        N° 20183849
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>

        


    </div>
}
export default Paso2V