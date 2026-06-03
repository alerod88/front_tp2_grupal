import React from 'react';
import listaBitacora from '../data/bitacora.json';

function Bitacora() {
  return (
    <div className="dashboard-content">
      <h2>Bitácora de Desarrollo Grupal</h2>
      <p style={{ marginBottom: '25px', fontSize: '1rem' }}>
        Registro cronológico de reuniones, debates técnicos y toma de decisiones del equipo de <strong>MocoSoft</strong>.
      </p>
      
      <table className="bitacora-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Actividad / Debate</th>
            <th>Integrantes</th>
            <th>Acuerdo Técnico / Resultado</th>
          </tr>
        </thead>
        <tbody>
          {listaBitacora.map((item, index) => (
            <tr key={index}>
              <td>{item.fecha}</td>
              <td>{item.actividad}</td>
              <td>{item.integrantes}</td>
              <td>{item.resultado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Bitacora;