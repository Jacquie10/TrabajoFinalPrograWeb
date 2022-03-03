import RegistroUsuario2 from "../../component/paso2registro.component"

const Paso2registro = () =>
{
    const ejecutarPasoFinal = () => {
        location.href = "/Login/registroFinal"
    }

    return <div>
        <RegistroUsuario2 confirmar={ejecutarPasoFinal}/>
    </div>
}
export default Paso2registro