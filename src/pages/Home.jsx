import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Home() {
  const [mostrarProposito, setMostrarProposito] = useState(false);

  return (
    <div className="dashboard-content">
      <div className="profile-section-block">
        <div className="welcome-banner">
          <h1>Bienvenidos a MocoSoft</h1>
          <p>Plataforma de Gestión, Innovación y Desarrollo de Soluciones Digitales.</p>
        </div>

        <div className="card shiny-effect" style={{ marginTop: '20px' }}>
          <h3>¿Quiénes Somos?</h3>
          <p>Somos un equipo de desarrolladores enfocados en transformar conceptos complejos en productos digitales estables, eficientes y reactivos.</p>
          
          <button 
            className="btn-primary" 
            onClick={() => setMostrarProposito(!mostrarProposito)}
            style={{ marginTop: '10px' }}
          >
            {mostrarProposito ? 'Ocultar Propósito' : 'Conocer Nuestro Propósito'}
          </button>

          {mostrarProposito && (
            <div style={{ marginTop: '15px', padding: '15px', background: 'rgba(0,184,148,0.1)', borderRadius: '6px' }}>
              <p style={{ margin: 0 }}><strong>Misión MocoSoft:</strong> Potenciar el crecimiento de las empresas mediante el desarrollo de soluciones digitales a medida.</p>
            </div>
          )}
        </div>

        <h3 style={{ marginTop: '40px', marginBottom: '20px', textAlign: 'left', width: '100%' }}>Nuestro Equipo de Trabajo</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', width: '100%' }}>
          <Card id="sergio" nombre="Sergio Daniel Galván" rol="Full Stack Developer" />
          <Card id="victor" nombre="Victor Álvarez" rol="UI/UX Specialist" />
          <Card id="alejandro" nombre="Alejandro Sebastian Rodriguez" rol="Frontend Engineer" />
        </div>
      </div>
    </div>
  );
}

export default Home;