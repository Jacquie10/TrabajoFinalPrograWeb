const Paso3C = (props) => {

    const butConfirmar= () =>{
        props.confirmar()
    }

    return <div>
        <h1>Paso 3 de 3</h1>
        <h5> Espere un momento</h5>  

        <label>Numero de operacion:  78 </label>
        <div>
            <button type="button" className="btn btn-primary mt-4" onClick={butConfirmar} >
                        Confirmar
            </button>
        </div>  
        

    </div>
}
export default Paso3C