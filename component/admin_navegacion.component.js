import { useState } from "react"

const Navegacion = (props) =>
{
    const [palabra, setTXTPalabra] = useState("")

    const txtPalabraOnChange = (event) =>
    {
        setTXTPalabra(event.target.value)
    }

    const buscarFiltro = () =>
    {
        props.onFiltrar(palabra)
        console.log(palabra)
    }

    return <div className="mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Clientes</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/administrador/tipoCambio">Tipo de cambio</a>
                        <a className="nav-link" href="/administrador/operaciones">Operaciones</a>
                    </div>
                </div>
            </div>
            <div>
                <form className="d-flex">
                    <input className="form-control me-2" placeholder="Search"
                        onChange={txtPalabraOnChange}/>
                        <button className="btn btn-outline-success"
                            onClick={buscarFiltro}>
                                Search
                        </button>
                </form>
            </div>
        </nav>
    
    </div>
}
export default Navegacion