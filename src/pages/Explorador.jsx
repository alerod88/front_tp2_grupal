import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import datosJSON from '../data/data.json'; 

function Explorador() {
  const [busqueda, setBusqueda] = useState('');
  const [vistaCodigo, setVistaCodigo] = useState(false);
  const navigate = useNavigate(); 

  // Filtrado en tiempo real por nombre o categoría
  const datosFiltrados = datosJSON.filter((elemento) => {
    const termino = busqueda.toLowerCase();
    return (
      elemento.nombre.toLowerCase().includes(termino) ||
      elemento.categoria.toLowerCase().includes(termino)
    );
  });

  return (
    <div className="explorador-container">
      <div className="explorador-header">
        <div>
          <h2>Explorador de Datos de MocoSoft</h2>
          <p>Buscador interactivo con filtrado en tiempo real e integración con docs oficiales.</p>
        </div>
        
        <button className="btn-secondary" onClick={() => setVistaCodigo(!vistaCodigo)}>
          {vistaCodigo ? "👁️ Ver Tarjetas" : "💻 Ver JSON Crudo"}
        </button>
      </div>
      
      <div className="explorador-bar">
        <input
          type="text"
          placeholder="🔍 Buscar por nombre o categoría..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="search-input"
        />
        <span className="results-counter">
          Resultados: {datosFiltrados.length}
        </span>
      </div>

      {vistaCodigo ? (
        <div className="json-viewer-block">
          <pre><code>{JSON.stringify(datosFiltrados, null, 2)}</code></pre>
        </div>
      ) : (
        <div className="explorador-grid">
          {datosFiltrados.length > 0 ? (
            datosFiltrados.map((elemento) => (
              <a 
                href={elemento.url} 
                key={elemento.id} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="explorador-card shiny-effect"
              >
                <div className="card-top">
                  <span className="badge badge-frontend">
                    {elemento.categoria}
                  </span>
                  
                  <img 
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${elemento.logo}/${elemento.logo}-original.svg`} 
                    alt={`Logo de ${elemento.nombre}`}
                    style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                    onError={(e) => { 
                      e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"; 
                    }}
                  />
                </div>

                <h3>{elemento.nombre}</h3>
                <p className="card-desc">{elemento.descripcion}</p>
                
                {/* 🏷️ SECCIÓN NUEVA: Minitags elásticos para rellenar la tarjeta de forma útil */}
                {elemento.tags && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px', marginBottom: '10px' }}>
                    {elemento.tags.map((tag, tIndex) => (
                      <span 
                        key={tIndex} 
                        style={{ 
                          fontSize: '0.75rem', 
                          backgroundColor: 'var(--light)', 
                          color: 'var(--text)', 
                          padding: '3px 8px', 
                          borderRadius: '6px',
                          fontWeight: '500',
                          border: '1px solid #eef1f4',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="view-profile">
                  Ver documentación ↗
                </div>
              </a>
            ))
          ) : (
            <div className="no-results">
              <p>No se encontraron resultados para "{busqueda}"</p>
            </div>
          )}
        </div>
      )}

      {/* BOTÓN VOLVER SINCRO */}
      <div className="back-button-container">
        <button className="btn-secondary" onClick={() => navigate('/')}>
          Volver al Inicio
        </button>
      </div>

    </div>
  );
}

export default Explorador;