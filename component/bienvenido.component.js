import { useState } from "react"

const Bienvenido = (props) =>
{
    const [mostrarVenta, setMostrarVenta] = useState(true)
    const [solicitarVenta, setSolicitarVenta] = useState(true)
    const [mostrarEditar, setMostrarEditar] = useState(false)

    const [txtMonto, settxtMonto] = useState('')
    const [txtCambio, settxtCambio] = useState('')
   

    const butVentaDolar = () =>
    {
        setSolicitarVenta(true)
        setMostrarVenta(true)
        

    }

    const butCompraDolar = () =>
    {
        
        setSolicitarVenta(false)
        setMostrarVenta(false)
       
    }

    const butMostrarEditar = () =>
    {
        setMostrarEditar(true)
    }

    
    const txtOnChangeMonto = (event) =>
    {
        const Monto = event.target.value
        settxtMonto(Monto)
        console.log(Monto)
        
    }


    const calcular = () =>{
       
        const valor = document.getElementById("cambioId")
        console.log(valor)


    }



  

    if(mostrarVenta)
    {

        return <div>
            <div className="row">
                <div className="col-sm-4 mt-4">
                    <h5>
                        El mejor tipo de cambio
                        para cambiar Bitcoins online en Lima, Perú
                    </h5>

                </div>

                <div className="col-md-4">
                    <div className="card text-center" >
                        <div className="card-body">
                            <div className="btn-group" role="group" aria-label="First group">
                                <button type="button" className="btn btn-info md-4" onClick={butVentaDolar}>
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
                                <button type="button" className="btn btn-info"
                                    onClick={butCompraDolar}>
                                        Comprar BTC
                                </button>
                            </div>
                            <div className="card-body">
                                <h3>168,770.37</h3>
                            </div>
                        </div>
                    </div>
                </div>



                {/* MOSTRAR TIPO DE CAMBIO VENTA*/}
                <div className="card mt-4">
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <label htmlFor="">Vender BTC</label>
                        </div>
                        <div className="col-md-2">
                            <input className="form-control" onChange={txtOnChangeMonto} type="number" />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-2">
                            <label htmlFor="">Tipo de Cambio</label>
                        </div>
                        <div className="col">
                            <h4 id="cambioId" >166,934.69</h4>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-2">
                            <label htmlFor="">Recibirás PEN</label>
                        </div>
                        <div className="col-md-2">
                            
                                <div class="card">
                                    <div class="card-body">
                                        <label for="txt_cuent" className="form-label">550</label>
                                    </div>
                                </div>
                            
                            <input className="form-control mb-4" id="recibiras" defaultValue="0.00" type="text"  />
                        </div>
                    </div>

                    <div>
                        <button type="button" className="btn btn-info md-4"
                                    onClick={calcular}  >Calcular</button>
                    </div>

                    <div>
                        <a href="/Pasos/pasoVenta" className="btn btn-success mb-4" >Solicitar venta</a>
                    </div>

                    
                </div>
            </div>
            <div>
                <a href="/" className="btn btn-danger mb-4 mt-2">Cerrar sesión</a>
            </div>
        </div>
    }
    else
    {
        {/* MOSTRAR TIPO DE CAMBIO COMPRA*/ }
        return <div>
            <div className="row">
                <div className="col-sm-4 mt-4">
                    <h5>
                        El mejor tipo de cambio
                        para cambiar dólares y
                        soles online en Lima, Perú
                    </h5>

                </div>

                <div className="col-md-4">
                    <div className="card text-center" >
                        <div className="card-body">
                            <div className="btn-group" role="group" aria-label="First group">
                                <button type="button" className="btn btn-info md-4"
                                    onClick={butVentaDolar}  >Vender BTC</button>
                            </div>
                            <div className="card-body">
                                <h3 >166,934.69</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card text-center" >
                        <div className="card-body">
                            <div className="btn-group" role="group" aria-label="First group">
                                <button type="button" className="btn btn-info">Comprar BTC</button>
                            </div>
                            <div className="card-body">
                                <h3>168,770.37</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mt-4">
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <label htmlFor="">Comprar BTC</label>
                        </div>
                        <div className="col-md-2">
                            <input className="form-control" type="number" onChange={txtOnChangeMonto}/>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-2">
                            <label htmlFor="">Tipo de Cambio</label>
                        </div>
                        <div className="col">
                            <h4 id="cambioId" >168,770.37</h4>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-2">
                            <label htmlFor="">Enviarás PEN</label>
                        </div>
                        <div className="col-md-2">
                            <input className="form-control mb-4" id="enviaras" defaultValue="0.00"  type="text" />
                        </div>
                    </div>

                    <div>
                        <a href="/Pasos/pasoCompra" className="btn btn-success mb-4">Solicitar Compra</a>

                    </div>

                    <div>
                        <button type="button" className="btn btn-info md-4"
                                    onClick={calcular}  >Calcular</button>
                    </div>




                   
                </div>
            </div>
            <div>
                <a href="/" className="btn btn-danger mb-4 mt-2">Cerrar sesión</a>
            </div>
        </div>
        
    }

}
export default Bienvenido