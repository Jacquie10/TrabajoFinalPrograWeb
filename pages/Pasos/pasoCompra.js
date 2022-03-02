import { useState } from "react"
import Paso1C from "../../component/paso1C.component"
import Paso2C from "../../component/paso2C.component"
import Paso3C from "../../component/paso3C.component"


const PasoCompra = () => 
{
    const [errorValidacion, setError] = useState(false)

    const ejecutarPaso2 = () => {
        location.href = "/Pasos/paso2C"
    }

    const validacion = (cuenta) => {
        if (cuenta == "") {
            setError(true)

        }

    }
    return <div>
            <Paso1C siguiente1={ejecutarPaso2} onvali={validacion} error={errorValidacion}/>

    </div>    

}
export default PasoCompra