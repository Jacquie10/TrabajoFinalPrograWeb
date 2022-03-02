const Paso3V = (props) => {
    const butConfirmar= () =>{
        props.confirmar()
    }

    return <div>

        <h1>Paso 3 de 3</h1>
        <h5> Espere un momento</h5>  

        <label>Numero de operacion:  14 </label>  
        <div className="mt-4">
            <button type="button" className="btn btn-primary mt-4" onClick={butConfirmar} >
                        Confirmar
            </button>
        </div>

    </div>
}
export default Paso3V