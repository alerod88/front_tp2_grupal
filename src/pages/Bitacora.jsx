import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importamos useNavigate
import listaBitacora from '../data/bitacora.json'; // Tu archivo original intacto

function Bitacora() {
  const navigate = useNavigate(); // 2. Inicializamos el ruteo de volver

  return (
    <div className="explorador-container">
      <div className="explorador-header">
        <div>
          <h2>Bitácora de Desarrollo Grupal</h2>
          <p>
            Registro cronológico de reuniones, debates técnicos y toma de decisiones del equipo de <strong>MocoSoft</strong>.
          </p>
        </div>
      </div>
      
      {/* 🗺️ CONTENEDOR DE LA LÍNEA DE TIEMPO (Reemplaza a la vieja etiqueta <table>) */}
      <div className="bitacora-timeline">
        {listaBitacora.map((item, index) => (
          <div key={index} className="bitacora-row-card shiny-effect">
            
            {/* Bloque Izquierdo: Fecha e Integrantes */}
            <div className="timeline-meta">
              <span className="timeline-date">{item.fecha}</span>
              <div className="timeline-authors">
                <strong>Participantes:</strong>
                <p>{item.integrantes}</p>
              </div>
            </div>

            {/* Bloque Derecho: Actividad y el Acuerdo Técnico final */}
            <div className="timeline-body">
              <h3>{item.actividad}</h3>
              <p className="timeline-desc">{item.resultado}</p>
            </div>

          </div>
        ))}
      </div>

      {/* BOTÓN VOLVER */}
      <div className="back-button-container" style={{ marginTop: '40px' }}>
        <button className="btn-secondary" onClick={() => navigate('/')}>
          Volver a Inicio
          </button>
      </div>
    </div>
  );
}

export default Bitacora;