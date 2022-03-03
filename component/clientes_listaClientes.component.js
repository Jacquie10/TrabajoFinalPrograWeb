
const ClientesListaClientes = (props) =>
{
    return <div>
        <div className="row mt-4">
            <div className="col mt-2">
                  <h3>Lista de Clientes</h3>
            </div>
        </div>

    <table className="table mt-4">
       <thead>
           <tr>
               <th>DNI</th>
               <th>Nombre</th>
               <th>Apellido</th>
               <th>Correo</th>
               <th>Password</th>
               <th>Telefono</th>
               <th>Estado</th>
           </tr>
       </thead>
       <tbody>
           {
               // Map -> Pinta en cada columna
               props.clientes.map((cliente) => {
                   return <tr key={cliente.id}>
                       <td>{cliente.dni}</td>
                       <td>{cliente.nombre}</td>
                       <td>{cliente.apellido}</td>
                       <td>{cliente.correo}</td>
                       <td>{cliente.password}</td>
                       <td>{cliente.telefono}</td>
                       <td>{cliente.estado}</td>

                       <td>
                           {
                               <button className="btn btn-link" onClick={() => {
                                // Llama a la funcion del padre
                                props.onEditarCliente(cliente.id)
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
export default ClientesListaClientes;