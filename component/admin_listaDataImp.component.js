import { useState } from "react"

const AdminListaDataImp = (props) =>
{
    const [valor,setValor] = useState(0)
    const [suma,setSuma] = useState(0)

    const sumarMonto= ()=>{
    
    }
    return <div>
        <div className="row mt-4">
            <div className="col mt-2">
                  <h3>Lista de Datos Importantes</h3>
            </div>
        </div>
  
        
       
    <table className="table mt-4">
       <thead>
           <tr>
               <th>Cliente</th>
               <th>Cuenta</th>
               <th>Direccion</th>
               <th>Nro Transaccion</th>
           </tr>
       </thead>
       <tbody>
           {
               // Map -> Pinta en cada columna
               props.datas.map((dataImp) => {
                   return <tr key={dataImp.id}>
                       <td>{dataImp.cliente}</td>
                       <td>{dataImp.cuenta}</td>
                       <td>{dataImp.direccion}</td>
                       <td>{dataImp.nroTransaccion}</td>
                       <td>
                           {
                               <button className="btn btn-link" onClick={() => {
                                // Llama a la funcion del padre
                                props.onEditarDataImp(dataImp.id)
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
export default AdminListaDataImp