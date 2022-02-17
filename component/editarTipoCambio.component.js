const EditarTipocambio = () => {
    return <div>
   <h3>Editar Tipo Cambio</h3>
    <div className="row mt-4">
    <div className="col-md-4">
            <div className="card text-center" >
                <div className="card-body">

                    <div className="btn-group" role="group" aria-label="First group">
                        <button type="button" class="btn btn-info md-4" >
                            Vender BTC
                        </button>
                    </div>


                    <div className="card-body">
                        <h3>166,934.69</h3>
                    </div>


                </div>
            </div>
        </div>

        <div className="col-sm-4">
            <div className="card text-center" >
                <div className="card-body">
                    <div className="btn-group" role="group" aria-label="First group">
                        <button type="button" className="btn btn-info">
                            Comprar BTC
                        </button>
                    </div>
                    <div className="card-body">
                        <h3>168,770.37</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <button type="button" className="btn btn-primary btn-lg mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Editar
    </button> 
 

    </div>
}
export default EditarTipocambio