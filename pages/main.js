import { useState } from "react"
import Bienvenido from "../component/bienvenido.component"

function MainPage()
{
    const [montoFinal, setMontoFinal] = useState(0)
   
   
    const calcular = (monto,cambio) =>{
        const num = monto*cambio
        setMontoFinal(num)

        console.log(num)
    }


    return <div>
        <Bienvenido hacerCalculo={calcular} variable={montoFinal} />
    </div>
}
export default MainPage
