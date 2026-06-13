import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const imagenesGaleria = [
  { id: 1, url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600', titulo: 'Desarrollo Backend', desc: 'Arquitectura de servidores en Node.js.' },
  { id: 2, url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600', titulo: 'Componentes React', desc: 'Estructuración modular de la interfaz.' },
  { id: 3, url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600', titulo: 'Estación de Trabajo', desc: 'Entorno de desarrollo MocoSoft IDE.' },
  { id: 4, url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600', titulo: 'Diseño UX/UI', desc: 'Maquetado elástico y paletas de color.' },
  { id: 5, url: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600', titulo: 'Control de Versiones', desc: 'Flujo de ramas bajo GitFlow.' },
  { id: 6, url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', titulo: 'Análisis de Datos', desc: 'Manipulación de estructuras JSON locales.' }
];

function Galeria() {
  const [modalImagen, setModalImagen] = useState(null);
  const [indiceActual, setIndiceActual] = useState(0);

  const abrirLightbox = (imagen, index) => {
    setModalImagen(imagen);
    setIndiceActual(index);
  };

  const cerrarLightbox = () => setModalImagen(null);

  const avanzar = (e) => {
    e.stopPropagation();
    const siguienteIndice = (indiceActual + 1) % imagenesGaleria.length;
    setIndiceActual(siguienteIndice);
    setModalImagen(imagenesGaleria[siguienteIndice]);
  };

  const retroceder = (e) => {
    e.stopPropagation();
    const previoIndice = (indiceActual - 1 + imagenesGaleria.length) % imagenesGaleria.length;
    setIndiceActual(previoIndice);
    setModalImagen(imagenesGaleria[previoIndice]);
  };

  // Captura nativa de teclado (ESC y Flechas) para el Lightbox
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
    <div className="dashboard-content">
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2>Galería de Imágenes Interactiva</h2>
        <p>Visualizador dinámico con entorno Lightbox adaptativo para la presentación de recursos de la empresa.</p>

        {/* Grid elástica */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', width: '100%', marginTop: '20px' }}>
          {imagenesGaleria.map((img, index) => (
            <div 
              key={img.id} 
              className="card shiny-effect" 
              style={{ padding: '0', overflow: 'hidden', cursor: 'pointer', minHeight: 'auto' }}
              onClick={() => abrirLightbox(img, index)}
            >
              <img src={img.url} alt={img.titulo} style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '20px', textAlign: 'left', width: '100%' }}>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{img.titulo}</h4>
                <p style={{ margin: '5px 0 0 0', fontSize: '0.85rem', color: 'var(--text)' }}>{img.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CONTENEDOR MODAL / LIGHTBOX */}
        {modalImagen && (
          <div 
            onClick={cerrarLightbox}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
            }}
          >
            <button onClick={cerrarLightbox} style={{ position: 'absolute', top: '20px', right: '30px', background: 'none', border: 'none', color: 'white', fontSize: '2.5rem', cursor: 'pointer' }}>×</button>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', maxWidth: '95%', maxHeight: '75vh' }}>
              <button onClick={retroceder} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', fontSize: '2rem', width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer' }}>‹</button>
              <img src={modalImagen.url} alt={modalImagen.titulo} style={{ maxHeight: '70vh', maxWidth: '100%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} />
              <button onClick={avanzar} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', fontSize: '2rem', width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer' }}>›</button>
            </div>

            <div style={{ color: 'white', marginTop: '15px', textAlign: 'center' }}>
              <h3 style={{ color: 'white', margin: 0 }}>{modalImagen.titulo}</h3>
              <p style={{ color: '#cbd5e1', margin: '5px 0 0 0', fontSize: '0.9rem' }}>{modalImagen.desc} (ESC para salir)</p>
            </div>
          </div>
        )}

        <div className="back-button-container">
          <Link to="/" className="btn-secondary">← Volver al Inicio</Link>
        </div>
      </div>
    </div>
  );
}

export default Galeria;