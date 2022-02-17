import { useState } from "react"

const RegistroUsuario1 = (props) =>
{
    {/* BOTON REGISTRAR */ }
    const [txtNombre, setTxtNombre] = useState("")
    const [txtApellido, setTxtApellido] = useState("")
    const [txtDNI, setTxtDNI] = useState(0)

    return <div>
        <h1>Registrate</h1>
        <div className="col-md-4">
        <div className="card mt-4">
            <div className="card-body">
                <h3>Paso 1</h3>
                    <form>
                        <div>
                            <label for="txt_username" className="form-label">Nombre</label>
                            <input id="txt_username" type="text" className="form-control"
                                defaultValue={txtNombre}/>
                        </div>
                        <div>
                            <label for="txt_apellido" className="form-label">Apellido</label>
                            <input id="txt_apellido" type="text" className="form-control"
                                defaultValue={txtApellido}/>
                        </div>
                        <div>
                            <label for="txt_dni" className="form-label">D.N.I</label>
                            <input id="txt_dni" type="text" className="form-control"
                                defaultValue={txtDNI}/>
                        </div>

                        <div className="row mt-2">
                            <div className="col">
                                <a href="/Login/registroP2" className="btn btn-success">Siguiente</a>
                            </div>
                            <div className="col">
                                <a href="/" className="btn btn-success">Regresar</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}
export default RegistroUsuario1