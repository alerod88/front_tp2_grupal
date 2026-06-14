import React from 'react';
import { useNavigate } from 'react-router-dom';

function Arbol() {
  const navigate = useNavigate();

  return (
    <div className="explorador-container">
      {/* Cabecera idéntica a la sección de Noticias y Galería */}
      <div className="explorador-header">
        <div>
          <h2>Árbol de Renderizado</h2>
          <p>Estructura jerárquica de la arquitectura de componentes de la Single Page Application.</p>
        </div>
      </div>

      {/* Contenedor adaptado que usa la estética oscura pero con márgenes y responsive limpios */}
      <div 
        className="shiny-effect" 
        style={{
          margin: 0,
            padding: '10px 5px 10px 15px',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            overflowX: 'auto', /* El scroll se genera acá adentro, no en la pantalla */
            whiteSpace: 'pre',
            display: 'block',
            width: '100%',
            boxSizing: 'border-box',
            borderLeft: '3px solid #334155'
        }}
      >
        <span style={{ color: '#4ade80', fontWeight: 'bold', display: 'block', marginBottom: '15px' }}>
          🌲 Component Tree Structure
        </span>

        {`App (Raíz de la Aplicación)
└── BrowserRouter (Manejador de Historial y Rutas)
    └── div.dashboard-layout (Layout Estructural)
        ├── Sidebar (Navegación Vertical Fija)
        │   ├── div.sidebar-header (Isologo Corporativo)
        │   ├── NavLink (path="/") -> Home
        │   ├── NavLink (path="/bitacora") -> Bitácora
        │   ├── NavLink (path="/explorador") -> Explorador
        │   └── ToggleButton (Switch Modo Oscuro)
        └── DashboardContent (Bloque Elástico Central Derecho)
            └── Routes (Intercambiador Dinámico de Vistas)
                ├── Route (/) -> Home
                ├── Route (/perfil/:id) -> Perfil
                ├── Route (/bitacora) -> Bitácora
                ├── Route (/explorador) -> Explorador
                ├── Route (/galeria) -> Galeria
                └── Route (/arbol) -> Arbol`}
      </div>

      {/* BOTÓN VOLVER IDÉNTICO */}
      <div className="back-button-container">
        <button className="btn-secondary" onClick={() => navigate('/')}>
          Volver a Inicio
        </button>
      </div>
    </div>
  );
}

export default Arbol;