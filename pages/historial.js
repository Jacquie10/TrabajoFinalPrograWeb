import CabeceraHistorial from "../component/cabeceraHistrorial.componente"
import ListaHistorial from "../component/listaHistorial.component"

const Historial = () => {

    const listaClientes = 
    [
        {id : "1", fecha : "22-02-2020", operacion : "Venta", cambio : 168, monto : 456789},
        {id : "2", fecha : "25-09-2020", operacion : "Venta", cambio : 168, monto : 124578},
        {id : "3", fecha : "10-01-2001", operacion : "Compra", cambio : 169, monto : 1245624}
    ]


    return <div>
        <CabeceraHistorial/>
        <ListaHistorial historials={listaClientes} />
        
    </div>
}
export default Historial