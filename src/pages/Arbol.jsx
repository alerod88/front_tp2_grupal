import React from 'react';
import { Link } from 'react-router-dom';

function Arbol() {
  return (
    <div className="dashboard-content">
      <div className="profile-section-block">
        <h2>Árbol de Renderizado</h2>
        <p>Estructura jerárquica de la arquitectura de componentes de la Single Page Application.</p>

        <div className="card" style={{ textAlign: 'left', fontFamily: 'monospace', backgroundColor: '#1a1d20', color: '#a0a6b5', width: '100%', marginTop: '20px' }}>
          <h3 style={{ color: '#00b894', borderBottom: '1px solid #343e47', paddingBottom: '10px', marginBottom: '15px' }}>🌳 Component Tree Structure</h3>
          
          <pre style={{ fontSize: '0.95rem', lineHeight: '1.6', margin: 0, whiteSpace: 'pre-wrap', color: '#cbd5e1' }}>
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
                ├── Route (/bitacora) -> Bitacora
                ├── Route (/explorador) -> Explorador
                ├── Route (/galeria) -> Galeria
                └── Route (/arbol) -> Arbol`}
          </pre>
        </div>

        <div className="back-button-container" style={{ marginTop: '30px', width: '100%', textAlign: 'left' }}>
          <Link to="/" className="btn-secondary">← Volver al Inicio</Link>
        </div>
      </div>
    </div>
  );
}

export default Arbol;