import { useState } from "react"
import Paso1V from "../../component/paso1V.component"
import Paso2V from "../../component/paso2V.component"
import Paso3V from "../../component/paso3V.component"

const PasoVenta = () => {

    const [mostrarPaso1, setMostrarPaso1] = useState(true)
    const [mostrarPaso2, setMostrarPaso2] = useState(false)
    const [mostrarPaso3, setMostrarPaso3] = useState(false)
    const [errorValidacion, setError] = useState(false)

    const ejecutarPaso2 = () => {
        setMostrarPaso1(false)
        setMostrarPaso2(true)
    }
    const ejecutarPaso3 = () => {

        setMostrarPaso2(false)
        setMostrarPaso3(true)
    }

    const validacion = (cuenta) => {
        if (cuenta == "") {
            setError(true)

        }

    }

    

    if (mostrarPaso1) {
        return <div>
            <Paso1V siguiente1={ejecutarPaso2} onvali={validacion} error={errorValidacion}/>

        </div>
    } else if (mostrarPaso2){
        return <div>
        <Paso2V siguiente2={ejecutarPaso3}  />
    </div>
    }
    else {

    return <div>

        <Paso3V />

    </div>
    }

 

}
export default PasoVenta