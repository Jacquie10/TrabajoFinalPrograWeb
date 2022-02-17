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
               <th>ID</th>
               <th>Fecha</th>
               <th>Hora</th>
               <th>Cliente</th>
               <th>Tipo de Operacion</th>
               <th>Tipo de Cambio</th>
               <th>Monto BTC</th>
           </tr>
       </thead>
       <tbody>
           {
               // Map -> Pinta en cada columna
               props.operaciones.map((operacion) => {
                   return <tr key={operacion.id}>
                       <td>{operacion.id}</td>
                       <td>{operacion.fecha}</td>
                       <td>{operacion.hora}</td>
                       <td>{operacion.cliente}</td>
                       <td>{operacion.tipoOperacion}</td>
                       <td>{operacion.tipoCambio}</td>
                       <td>{operacion.montoBitc}</td>
                       <td>
                           {
                               <button className="btn btn-link" onClick={() => {
                                // Llama a la funcion del padre
                                props.onEditarOperacion(operacion)
                            }} >
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
                                               Finalizado
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
export default AdminListaOperaciones