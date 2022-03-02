import { useState } from "react"
import Bienvenido from "../component/bienvenido.component"
import BarraMain from "../component/BarraMain.component"

function MainPage()
{
    const [montoFinal, setMontoFinal] = useState(0)
   
   
    const calcularMonto = (monto,cambio) =>{
        const num = monto*cambio
        setMontoFinal(num)

        console.log(num)
    }


    return <div>
        <div className="row mt-4 mb-4">
            <h1 className="col mt-4">¡Bienvenid@!</h1>
            <div className="col mt-4">
                <BarraMain />
            </div>

        </div>

        <Bienvenido hacerCalculo={calcularMonto} variable={montoFinal} />
    </div>
}
export default MainPage
