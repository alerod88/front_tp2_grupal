import React from 'react';
import listaBitacora from '../data/bitacora.json'; // Ajustá la ruta según tu carpeta

function Bitacora() {
  return (
    <div className="dashboard-content">
      <div className="team-container" style={{ alignItems: 'flex-start' }}>
        <h2>Bitácora de Desarrollo Grupal</h2>
        <p style={{ marginBottom: '20px' }}>
          Registro cronológico de reuniones, debates técnicos y toma de decisiones del equipo de <strong>MocoSoft</strong>.
        </p>
        
        <table className="bitacora-table">
          <thead>
            <tr>
              <th style={{ width: '12%' }}>Fecha</th>
              <th style={{ width: '30%' }}>Actividad / Debate</th>
              <th style={{ width: '18%' }}>Integrantes</th>
              <th style={{ width: '40%' }}>Acuerdo Técnico / Resultado</th>
            </tr>
          </thead>
          <tbody>
            {listaBitacora.map((item, index) => (
              <tr key={index}>
                <td style={{ fontWeight: 'bold', color: 'var(--accent)' }}>{item.fecha}</td>
                <td style={{ fontWeight: '500' }}>{item.actividad}</td>
                <td style={{ fontStyle: 'italic' }}>{item.integrantes}</td>
                <td>{item.resultado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bitacora;