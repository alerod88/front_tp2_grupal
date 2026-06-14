import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. IMPORTAMOS EL ARCHIVO JSON DIRECTAMENTE
import trabajosMocoSoft from '../data/proyectos.json'; 

function Galeria() {
  const [modalImagen, setModalImagen] = useState(null);
  const [indiceActual, setIndiceActual] = useState(0);
  const navigate = useNavigate();

  const abrirLightbox = (imagen, index) => {
    setModalImagen(imagen);
    setIndiceActual(index);
  };

  const cerrarLightbox = () => setModalImagen(null);

  const avanzar = (e) => {
    e.stopPropagation();
    const siguienteIndice = (indiceActual + 1) % trabajosMocoSoft.length;
    setIndiceActual(siguienteIndice);
    setModalImagen(trabajosMocoSoft[siguienteIndice]);
  };

  const retroceder = (e) => {
    e.stopPropagation();
    const previoIndice = (indiceActual - 1 + trabajosMocoSoft.length) % trabajosMocoSoft.length;
    setIndiceActual(previoIndice);
    setModalImagen(trabajosMocoSoft[previoIndice]);
  };

  useEffect(() => {
    const manejarTeclas = (e) => {
      if (e.key === 'Escape') cerrarLightbox();
      if (e.key === 'ArrowRight' && modalImagen) avanzar(e);
      if (e.key === 'ArrowLeft' && modalImagen) retroceder(e);
    };
    window.addEventListener('keydown', manejarTeclas);
    return () => window.removeEventListener('keydown', manejarTeclas);
  }, [modalImagen, indiceActual]);

  return (
    <div className="explorador-container">
      <div className="explorador-header">
        <div>
          <h2>Galería Interactiva de Trabajos</h2>
          <p>Portafolio oficial de soluciones digitales y sistemas robustos puestos en producción por el equipo de MocoSoft.</p>
        </div>
      </div>

      <div className="explorador-grid">
        {/* 2. LA GRILLA SIGUE FUNCIONANDO EXACTAMENTE IGUAL */}
        {trabajosMocoSoft.map((trabajo, index) => (
          <div 
            key={trabajo.id} 
            className="explorador-card shiny-effect"
            onClick={() => abrirLightbox(trabajo, index)}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src={trabajo.url} 
              alt={trabajo.titulo} 
              style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '5px' }} 
            />

            <div className="card-top" style={{ marginTop: '10px' }}>
              <span className="badge badge-frontend">
                {trabajo.tag}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#888' }}>
                ⭐ Proyecto Destacado
              </span>
            </div>

            <h3>{trabajo.titulo}</h3>
            <p className="card-desc">{trabajo.desc}</p>
            
            <div className="card-meta" style={{ display: 'flex', alignItems: 'center', gap: '8px', borderTop: '1px solid #edf2f7', paddingTop: '10px', marginTop: 'auto' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text)', fontWeight: '500' }}>💻 Desarrollado por MocoSoft</span>
            </div>

            <div className="view-profile">
              Ampliar Galería 🔍
            </div>
          </div>
        ))}
      </div>

      {/* INTERFAZ DEL LIGHTBOX INTERACTIVO (RESPONSIVE) */}
      {modalImagen && (
        <div 
          onClick={cerrarLightbox}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 9999, display: 'flex',
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '10px'
          }}
        >
          <button 
            onClick={cerrarLightbox} 
            style={{ 
              position: 'absolute', top: '15px', right: '20px', background: 'rgba(255,255,255,0.1)', 
              border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer',
              width: '40px', height: '40px', borderRadius: '50%', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', zIndex: 10000
            }}
          >
            ×
          </button>
          
          <div style={{ 
            position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '100%', maxWidth: '800px', maxHeight: '60vh', marginTop: '40px'
          }}>
            <button 
              onClick={retroceder} 
              style={{ 
                position: 'absolute', left: '10px', background: 'rgba(0,0,0,0.6)', 
                border: '1px solid rgba(255,255,255,0.3)', color: 'white', fontSize: '1.5rem', 
                width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer', zIndex: 10
              }}
            >
              ‹
            </button>

            <img 
              src={modalImagen.url} 
              alt={modalImagen.titulo} 
              style={{ 
                maxHeight: '55vh', maxWidth: '100%', objectFit: 'contain', 
                borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' 
              }} 
            />

            <button 
              onClick={avanzar} 
              style={{ 
                position: 'absolute', right: '10px', background: 'rgba(0,0,0,0.6)', 
                border: '1px solid rgba(255,255,255,0.3)', color: 'white', fontSize: '1.5rem', 
                width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer', zIndex: 10
              }}
            >
              ›
            </button>
          </div>

          <div style={{ 
            color: 'white', marginTop: '20px', textAlign: 'center', 
            padding: '0 15px', maxWidth: '500px' 
          }}>
            <h3 style={{ color: 'white', margin: '0 0 5px 0', fontSize: '1.2rem' }}>{modalImagen.titulo}</h3>
            <p style={{ color: '#cbd5e1', margin: 0, fontSize: '0.85rem', lineHeight: '1.4' }}>
              {modalImagen.desc}
            </p>
            <span style={{ display: 'block', color: '#64748b', fontSize: '0.75rem', marginTop: '8px' }}>
              (Toca los lados para navegar • ESC para salir)
            </span>
          </div>
        </div>
      )}

      <div className="back-button-container">
        <button className="btn-secondary" onClick={() => navigate('/')}>
          Volver a Inicio
        </button>
      </div>
    </div>
  );
}

export default Galeria;