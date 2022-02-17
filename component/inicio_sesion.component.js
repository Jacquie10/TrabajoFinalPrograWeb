import { useState } from "react"

const Login = (props) =>
{
    {/* BOTON LOGIN */}
    const [txtCorreo, setTxtCorreo] = useState("")
    const [txtPassword, setTxtPassword] = useState("")

    const txtCorreoOnChange = (event) => 
    {
        // Obtiene el dato de la caja de text
        setTxtCorreo(event.target.value)
    }

    const txtPasswordOnChange = (event) => 
    {
        // Obtiene el dato de la caja de texto
        setTxtPassword(event.target.value)
    }

    const butLoginOnClick = () =>
    {
        props.onLogin(txtCorreo, txtPassword)
    }


    return <div>
        <div className="row">
            <div className="col-md-4">
                <h2 className="mt-4">
                    EL MAYOR MERCADO DE CRIPTOMONEDAS
                    EN EL PERÚ
                </h2>
                <h5 className="mt-4">
                    El sitio de internet más seguro para
                    la compra y venta de bitcoins!
                </h5>
            </div>

            <div className="col-md-2 mt-4">
                <img src="https://w7.pngwing.com/pngs/923/541/png-transparent-cryptocurrency-bitcoin-blockchain-token-coin-bitcoin-investment-cryptocurrency-exchange-altcoins.png" />
            </div>

        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="card mt-4">
                    <div className="card-body">
                        <h3>Login</h3>
                        <form>
                            <div>
                                <label for="txtCorreo" className="form-label">Correo Electronico</label>
                                <input id="txtCorreo" type="text" className="form-control"
                                    defaultValue={txtCorreo} onChange={txtCorreoOnChange} />
                            </div>
                            <div class="mb-2">
                                <label for="txtPassword" className="form-label">Contraseña</label>
                                <input id="txtPassword" type="password" className="form-control"
                                    defaultValue={txtPassword} onChange={txtPasswordOnChange} />
                            </div>
                            <button id="butLogin" className="btn btn-primary" type="button"
                                onClick={butLoginOnClick}>
                                Login
                            </button>
                            <a href="/Login/registroP1" className="btn btn-link">Abrir cuenta</a>
                        </form>
                        {
                            (() => {
                                if (props.error) {
                                    return <div className="alert alert-danger mt-2">Complete los campos!</div>
                                }
                            })()
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-2 mt-4">
                <img src="https://www.osi.es/sites/default/files/images/concienciacion/imagenes_landings/c10-img-banner-2-caras-criptomonedas.png" />
            </div>
        </div>
    </div>
}
export default Login