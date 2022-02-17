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

        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombres Completos</th>
                    <th>DNI</th>
                    <th>Correo</th>
                    <th>Telefono</th>
                    <th>Opciones</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {
                    // Map -> Pinta en cada columna
                    props.clientes.map((cliente) => {
                        return <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombreCompleto}</td>
                            <td>{cliente.DNI}</td>
                            <td>{cliente.correo}</td>
                            <td>{cliente.telefono}</td>
                            <td>
                                {
                                    <button className="btn btn-link"
                                        onClick={() => {
                                            // Llama a la funcion del padre
                                            props.onEditarCliente(cliente)
                                        }}>
                                        Editar
                                    </button>
                                }
                            </td>
                            <td>
                                {
                                    <div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    Pendiente
                                                </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    Validado
                                                </label>
                                        </div>
                                    </div>
                                }
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        
    </div>
}
export default Navegacion