import Paso2V from "../../component/paso2V.component"

const Paso2Venta = () =>
{
    const ejecutarPaso3 = () => {
        location.href = "/Pasos/paso3V"
    }

    return <div>
        <Paso2V siguiente2={ejecutarPaso3}  />
    </div>
}
export default Paso2Venta