const RegistroUsuario2 = () =>
{
    return <div>
        <h1 className="mt-4">Falta poco!</h1>
        <div className="col-md-4">
            <div className="card mt-4">
                <div className="card-body">
                    <h3>Paso 2</h3>
                    <form>
                        <div>
                            <label htmlFor="txt_correo" className="form-label">Correo Electronico</label>
                            <input id="txt_correo" type="email" className="form-control" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="txt_password" className="form-label">Contraseña</label>
                            <input id="txt_password" type="password" className="form-control" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="txt_password" className="form-label">Repetir Contraseña</label>
                            <input id="txt_password" type="password" className="form-control" />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="txt_telefono" className="form-label">Numero Telefonico</label>
                            <input id="txt_telefono" type="text" className="form-control" />
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <a href="/Login/registroP1" className="btn btn-success">Regresar</a>
                            </div>
                            <div className="col-md-4">
                                <a href="/Login/registroFinal" className="btn btn-success">Finalizar</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}
export default RegistroUsuario2