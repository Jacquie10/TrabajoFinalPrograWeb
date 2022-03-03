
const AdminListaOperaciones = (props) =>
{
    return <div>
        <div className="row mt-4">
            <div className="col mt-2">
                  <h3>Lista de Operaciones</h3>
            </div>
            <div className="col mt-2">
                 <h5>  Monto total Operado: 1 721 626 Bitc</h5>
            </div>
        </div>

        
       
    <table className="table mt-4">
       <thead>
           <tr>
               <th>Fecha</th>
               
               <th>Tipo de Operacion</th>
               <th>Tipo de Cambio</th>
               <th>Monto BTC</th>
               <th>Estado</th>
               <th>Cliente</th>
           </tr>
       </thead>
       <tbody>
           {
               // Map -> Pinta en cada columna
               props.operaciones.map((operacion) => {
                   return <tr key={operacion.id}>
                       <td>{operacion.fecha}</td>
                       <td>{operacion.tipoOperacion}</td>
                       <td>{operacion.tipoCambio}</td>
                       <td>{operacion.montoFinal}</td>
                       <td>{operacion.estado}</td>
                       <td>{operacion.cliente}</td>


                       <td>
                           {
                               <button className="btn btn-link" onClick={() => {
                                // Llama a la funcion del padre
                                props.onEditarOperacion(operacion.id)
                            }} >
                                   Editar
                               </button>
                           }
                       </td>
                     
                   </tr>
               })
           }
       </tbody>
   </table>

</div>

}
export default AdminListaOperaciones