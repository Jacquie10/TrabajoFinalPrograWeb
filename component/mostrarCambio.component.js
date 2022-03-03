import { useState } from "react"

const MostrarCambio = (props) => {
    
    const [numero, setNumero] = useState(0)
    const [valorVenta, setValorVenta] = useState(166934.69)
    const [valorCompra, setValorCompra] = useState(168770.37)
    

    
    const butVentaDolar = () => {
        setNumero(166934.69)
        props.enviar(numero, "venta")
        
    }

    const butCompraDolar = () => {
        setNumero(168770.37)
        props.enviar(numero,"compra")
    }



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
                            <h3>{valorVenta} </h3>
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
                            <h3>{valorCompra}</h3>
                        </div>
                    </div>
                </div>
            </div>


        </div>

</div>    
    
}
export default MostrarCambio