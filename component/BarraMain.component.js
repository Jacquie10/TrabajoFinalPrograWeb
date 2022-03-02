const BarraMain = () =>
{
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/main">Seccion Compra/Venta </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/historial">Historial</a>
                        <a className="nav-link active" aria-current="page" href="/">Cerrar Sesion</a>


                    </div>
                </div>
            </div>
        </nav>

    </div>
}
export default BarraMain