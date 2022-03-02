import Paso3C from "../../component/paso3C.component"

const Paso3Compra = () =>
{
    const ejecutarPasoFinal = () => {
        location.href = "/Pasos/pasoFinalC"
    }

    return <div>
        <Paso3C confirmar={ejecutarPasoFinal}/>
    </div>
}
export default Paso3Compra