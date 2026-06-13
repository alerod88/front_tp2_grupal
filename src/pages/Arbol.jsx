import React from 'react';
import { Link } from 'react-router-dom';

function Arbol() {
  return (
    <div className="dashboard-content">
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Árbol de Renderizado (Arquitectura de Componentes)</h2>
        <p>Estructura jerárquica obligatoria que detalla la organización de los componentes del proyecto MocoSoft.</p>

        <div className="profile-section-block" style={{ textAlign: 'left', fontFamily: 'monospace', backgroundColor: '#1a1d20', color: '#a0a6b5', padding: '30px', margin: '20px 0' }}>
          <h3 style={{ color: '#00b894', borderBottom: '1px solid #343e47', paddingBottom: '10px', marginBottom: '15px' }}>🌳 Component Tree Structure</h3>
          
          <pre style={{ fontSize: '1rem', lineHeight: '1.6', margin: 0, whiteSpace: 'pre-wrap' }}>
{`App (Raíz de la Aplicación)
└── BrowserRouter (Manejador de Historial y Contexto de Rutas)
    └── div.dashboard-layout (Layout de Contención General)
        ├── Sidebar (Navegación Estructurada Lateral Fija)
        │   ├── div.sidebar-header (Logo del Grupo Corporativo)
        │   ├── NavLink (path="/") -> Home
        │   ├── NavLink (path="/bitacora") -> Bitácora de Proyecto
        │   ├── NavLink (path="/explorador") -> Explorador JSON
        │   ├── NavLink (path="/api-externa") -> API GitHub
        │   ├── NavLink (path="/galeria") -> Galería Interactiva
        │   ├── NavLink (path="/arbol") -> Árbol de Renderizado
        │   ├── NavLink (path="/contacto") -> Formulario de Contacto
        │   └── ToggleButton (Componente Control de Modo Oscuro)
        └── DashboardContent (Contenedor Elástico Central Derecho)
            └── Routes (Módulo de Intercambio Dinámico de Vistas SPA)
                ├── Route (/) -> Home
                │   └── Card (Componente de Integrante Reutilizable x3)
                ├── Route (/bitacora) -> Bitacora
                ├── Route (/explorador) -> Explorador
                ├── Route (/api-externa) -> ApiExterna
                ├── Route (/galeria) -> Galeria (Entorno Lightbox)
                ├── Route (/arbol) -> Arbol (Este Esquema Técnico)
                └── Route (/contacto) -> Contacto`}
          </pre>
        </div>

        <div className="back-button-container">
          <Link to="/" className="btn-secondary">← Volver al Inicio</Link>
        </div>
      </div>
    </div>
  );
}

export default Arbol;