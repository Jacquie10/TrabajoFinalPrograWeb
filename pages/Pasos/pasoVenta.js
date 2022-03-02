import { useState } from "react"
import Paso1V from "../../component/paso1V.component"


const PasoVenta = () => {

    const [errorValidacion, setError] = useState(false)

    const ejecutarPaso2 = () => {
        location.href = "/Pasos/paso2V"
    }

    const validacion = (cuenta) => {
        if (cuenta == "") {
            setError(true)

        }
    }

    return <div>
        <Paso1V siguiente1={ejecutarPaso2} onvali={validacion} error={errorValidacion}/>

    </div>
    
}
export default PasoVenta