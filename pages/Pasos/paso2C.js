import Paso2C from "../../component/paso2C.component"

const Paso2Compra = () =>
{
    const ejecutarPaso3 = () => {
        location.href = "/Pasos/paso3C"
    }

    return <div>
        <Paso2C siguiente2={ejecutarPaso3}  />
    </div>
}
export default Paso2Compra