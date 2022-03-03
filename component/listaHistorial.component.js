import { useState } from "react"

const ListaHistorial = (props) => {
    

 
    
    return <div className="mt-4">
        <table className="table">
            <thead>
                <tr>
                    <th>Nro Operacion</th>
                    <th>Fecha y Hora</th>
                    <th>Tipo de Operacion</th>
                    <th>Tipo de Cambio</th>
                    <th>Monto</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    // Map -> Pinta en cada columna
                    props.historials.map((historial) => {
                        return <tr key={historial.id}>
                            <td>{historial.id}</td>
                            <td>{historial.fecha}</td>
                            <td>{historial.operacion}</td>
                            <td>{historial.cambio}</td>
                            <td>{historial.monto}</td>
                        
                        </tr>
                    })
                }
            </tbody>
        </table>
        
    </div>

}

export default ListaHistorial