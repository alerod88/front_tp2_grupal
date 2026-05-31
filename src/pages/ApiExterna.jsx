import { useState, useEffect } from 'react';

function ApiExterna() {
  // Estados para la gestión de datos y requerimientos del TP
  const [repositorios, setRepositorios] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const consumirGitHub = async () => {
      try {
        setCargando(true);
        setError(null);

        // Consumimos la API de GitHub buscando proyectos de JavaScript paginados de a 9 elementos
        const respuesta = await fetch(
          `https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&page=${paginaActual}&per_page=9`
        );
        
        if (!respuesta.ok) {
          throw new Error('Error al conectar con GitHub (Límite de peticiones alcanzado o caída de red)');
        }

        const datos = await respuesta.json();
        setRepositorios(datos.items); // GitHub devuelve los resultados dentro de la propiedad "items"
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    consumirGitHub();
  }, [paginaActual]); // Se vuelve a ejecutar el fetch automáticamente al cambiar de página

  return (
    <div style={{ padding: '10px' }}>
      <h2>Módulo de Integración de API Externa</h2>
      <p style={{ textAlign: 'left', margin: '10px 0 25px 0' }}>
        Consumo asíncrono de la API de <strong>GitHub</strong> utilizando <code>useEffect</code>, manejo de excepciones y paginación reactiva.
      </p>

      {/* 1. MANEJO DE ESTADO: CARGANDO */}
      {cargando && (
        <div style={{ textAlign: 'center', padding: '40px', fontSize: '1.2rem', color: 'var(--accent)' }}>
          Conectando con los servidores de GitHub... por favor espere.
        </div>
      )}

      {/* 2. MANEJO DE ESTADO: ERROR */}
      {error && (
        <div style={{ background: '#e74c3c', color: 'white', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
          <strong>⚠️ Estado de Error:</strong> {error}
        </div>
      )}

      {/* 3. RENDERIZADO DE REPOSITORIOS */}
      {!cargando && !error && (
        <>
          {/* Grilla dinámica de proyectos de software */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            {repositorios && repositorios.map((repo) => (
              <div key={repo.id} className="card" style={{ minHeight: '280px', padding: '20px', textAlign: 'left', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px', width: '100%' }}>
                  <img 
                    src={repo.owner.avatar_url} 
                    alt={repo.owner.login} 
                    style={{ width: '45px', height: '45px', borderRadius: '50%', border: '2px solid var(--accent)' }} 
                  />
                  <div style={{ overflow: 'hidden' }}>
                    <h4 style={{ fontSize: '1rem', color: 'var(--primary)', margin: 0, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                      {repo.name}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: '#888' }}>Autor: {repo.owner.login}</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.85rem', color: '#555', flex: '1', textAlign: 'left', margin: '0 0 15px 0', width: '100%', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {repo.description || 'Sin descripción disponible.'}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', fontSize: '0.85rem', paddingTop: '10px', borderTop: '1px solid #eee' }}>
                  <span style={{ background: '#e8f8f5', color: 'var(--accent)', padding: '3px 8px', borderRadius: '4px', fontWeight: '600' }}>
                    {repo.language}
                  </span>
                  <span style={{ color: '#f39c12', fontWeight: '600' }}>
                    ⭐ {repo.stargazers_count.toLocaleString()}
                  </span>
                </div>

              </div>
            ))}
          </div>

          {/* --- CONTROLES DE LA PAGINACIÓN --- */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', margin: '30px 0' }}>
            <button 
              onClick={() => setPaginaActual((prev) => Math.max(prev - 1, 1))} 
              disabled={paginaActual === 1}
              className="btn-primary"
              style={{ margin: 0, opacity: paginaActual === 1 ? 0.5 : 1, cursor: paginaActual === 1 ? 'not-allowed' : 'pointer' }}
            >
              Anterior
            </button>

            <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>
              Página: <span style={{ color: 'var(--accent)' }}>{paginaActual}</span>
            </span>

            <button 
              onClick={() => setPaginaActual((prev) => prev + 1)}
              className="btn-primary"
              style={{ margin: 0 }}
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ApiExterna;