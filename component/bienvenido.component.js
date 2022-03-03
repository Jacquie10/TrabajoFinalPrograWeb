import { useState } from "react"

const Bienvenido = (props) =>
{


    const [txtMonto, settxtMonto] = useState('')
   



    
    const txtOnChangeMonto = (event) =>
    {
        const Monto = event.target.value
        settxtMonto(Monto)
        console.log(Monto)
    }


    const calcular = () =>{
       
        props.Monto(txtMonto)

    }



  

    if (props.modo) {

        return <div>
           
          

                
   
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
                            <h4 id="cambioId" >166,934.69   </h4>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-2">
                            <label htmlFor="">Recibirás PEN</label>
                        </div>

                        <div className="col-md-2">
                            
                                <div class="card">
                                    <div class="card-body">
                                        <label for="txt_cuent" className="form-label"> {props.variable}</label>
                                    </div>
                                </div>
                            
                        </div>
                    </div>



                    <div className="mt-4">
                        <button type="button" className="btn btn-info md-4"
                                    onClick={calcular}  >Calcular</button>
                    </div>

                    <div className="mt-4">
                        <a href="/Pasos/pasoVenta" className="btn btn-success mb-4" >Solicitar venta</a>
                    </div>

                </div>
   



    </div>  
  
    }
    else{
    {/* MOSTRAR TIPO DE CAMBIO COMPRA*/ }
    return <div>
        <div className="row">


            <div className="card mt-4">
                <div className="row mt-4">
                    <div className="col-md-2">
                        <label htmlFor="">Comprar BTC</label>
                    </div>
                    <div className="col-md-2">
                        <input className="form-control" type="number" onChange={txtOnChangeMonto} />
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
                            
                                <div class="card">
                                    <div class="card-body">
                                        <label for="txt_cuent" className="form-label"> {props.variable}</label>
                                    </div>
                                </div>
                            
                        </div>
                </div>

                <div className="mt-4">
                        <button type="button" className="btn btn-info md-4"
                                    onClick={calcular}  >Calcular</button>
                </div>

                <div className="mt-4">
                    <a href="/Pasos/pasoCompra" className="btn btn-success mb-4">Solicitar Compra</a>

                </div>

               





            </div>



        </div>
    </div>
        
    }

}
export default Bienvenido