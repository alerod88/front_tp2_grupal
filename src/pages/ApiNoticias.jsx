import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importamos useNavigate

function ApiNoticias() {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // 2. Inicializamos el hook de navegación

  useEffect(() => {
    const consultarNoticias = async () => {
      try {
        setCargando(true);
        setError(null);
        
        // Consultamos los 6 artículos de JavaScript más populares y recientes de la comunidad Dev.to
        const respuesta = await fetch('https://dev.to/api/articles?tag=javascript&top=5&per_page=6');
        
        if (!respuesta.ok) {
          throw new Error('No se pudo conectar con el servidor de noticias.');
        }

        const datos = await respuesta.json();
        setArticulos(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    consultarNoticias();
  }, []);

  return (
    <div className="explorador-container">
      <div className="explorador-header">
        <div>
          <h2>Novedades del Sector Tecnológico</h2>
          <p>Artículos y tendencias globales de desarrollo consumidos en tiempo real desde la API de Dev.to.</p>
        </div>
      </div>

      {/* 1. ESTADO DE CARGA */}
      {cargando && (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--accent)', fontWeight: '600' }}>
          Sincronizando últimas publicaciones... por favor espere.
        </div>
      )}

      {/* 2. ESTADO DE ERROR */}
      {error && (
        <div style={{ background: '#e74c3c', color: 'white', padding: '15px', borderRadius: '12px', marginBottom: '20px' }}>
          <strong>⚠️ Error de integración:</strong> {error}
        </div>
      )}

      {/* 3. RENDERIZADO DE LA INFORMACIÓN */}
      {!cargando && !error && (
        <div className="explorador-grid">
          {articulos.map((art) => (
            <a 
              href={art.url} 
              key={art.id} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="explorador-card shiny-effect"
            >
              {/* Imagen de portada del artículo */}
              {art.cover_image && (
                <img 
                  src={art.cover_image} 
                  alt={art.title} 
                  style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '5px' }} 
                />
              )}

              <div className="card-top" style={{ marginTop: art.cover_image ? '10px' : '0' }}>
                <span className="badge badge-frontend">
                  {art.tags.split(',')[0]}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#888' }}>
                  💬 {art.comments_count}
                </span>
              </div>

              <h3>{art.title}</h3>
              <p className="card-desc">{art.description}</p>
              
              <div className="card-meta" style={{ display: 'flex', alignItems: 'center', gap: '8px', borderTop: '1px solid #edf2f7', paddingTop: '10px' }}>
                <img src={art.user.profile_image_90} alt={art.user.name} style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
                <span style={{ fontSize: '0.8rem', color: 'var(--text)' }}>Por {art.user.name}</span>
              </div>

              <div className="view-profile">
                Leer artículo completo ↗
              </div>
            </a>
          ))}
        </div>
      )}

      {/* BOTÓN VOLVER */}
        <div className="back-button-container">
          <button className="btn-secondary" onClick={() => navigate('/')}>
            Volver a Inicio
          </button>
        </div>

    </div>
  );
}

export default ApiNoticias;