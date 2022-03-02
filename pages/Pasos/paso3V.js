import Paso3V from "../../component/paso3V.component"

const Paso3Venta = () =>
{
    const ejecutarPasoFinal = () => {
        location.href = "/Pasos/pasoFinalV"
    }

    return <div>
        <Paso3V confirmar={ejecutarPasoFinal}/>
    </div>
}
export default Paso3Venta