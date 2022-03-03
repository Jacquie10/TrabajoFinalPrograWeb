import { useState } from "react"
import BarraMain from "../component/BarraMain.component"
import Bienvenido from "../component/bienvenido.component"
import MostrarCambio from "../component/mostrarCambio.component"

function MainPage()
{
    const [montoFinal, setMontoFinal] = useState(0)
    const [montoCambio, setMontoCambio] = useState(0)
    const [modo, setModo] = useState(true)
   
    const HacerCalculo = (monto) =>{
        const num = monto * montoCambio
        console.log(num)
        setMontoFinal(num)

    }

    const recibirMonto= (cambio,mostrar) =>{
        setMontoCambio(cambio)
        if(mostrar=="venta"){
            setModo(true)

        }else{
            setModo(false)
        }

    }

    return <div>
        <div className="row mt-4 mb-4">
             <h1 className="col mt-4">¡Bienvenid@!</h1>
            <div className="col mt-4">
               <BarraMain/>
            </div>
            
        </div>
        

        <MostrarCambio  enviar={recibirMonto}  />
        <Bienvenido Monto={HacerCalculo} variable={montoFinal} modo={modo} />
    </div>
}
export default MainPage
