import { useState } from "react"
import Paso1C from "../../component/paso1C.component"
import Paso2C from "../../component/paso2C.component"
import Paso3C from "../../component/paso3C.component"


const PasoCompra = () => {

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
            <Paso1C siguiente1={ejecutarPaso2} onvali={validacion} error={errorValidacion}/>

        </div>
    } else if (mostrarPaso2){
        return <div>
        <Paso2C siguiente2={ejecutarPaso3}/>
    </div>
    }
    else {

    return <div>

        <Paso3C />

    </div>
    }

 

}
export default PasoCompra