import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Banco de proyectos reales realizados por MocoSoft Solutions
const trabajosMocoSoft = [
  { 
    id: 1, 
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600', 
    titulo: 'E-Commerce Extremo', 
    desc: 'Desarrollo de una plataforma de ventas masivas con pasarela de pagos integrada y carga elástica de productos.' 
  },
  { 
    id: 2, 
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600', 
    titulo: 'Dashboard Analytics Pro', 
    desc: 'Panel de control inteligente para el seguimiento de métricas comerciales en tiempo real con filtrado indexado de datos.' 
  },
  { 
    id: 3, 
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600', 
    titulo: 'SGE - Gestión Escolar', 
    desc: 'Sistema integral en la nube para instituciones educativas, administrando legajos, asistencia y árboles de calificaciones.' 
  },
  { 
    id: 4, 
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600', 
    titulo: 'Fintech Wallet App', 
    desc: 'Aplicación móvil de finanzas personales con cotización de divisas en vivo, control de gastos y generación de reportes.' 
  },
  { 
    id: 5, 
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600', 
    titulo: 'CRM Corporativo corporativo', 
    desc: 'Plataforma a medida para la gestión de relaciones con clientes, automatización de embudos de venta y soporte técnico.' 
  },
  { 
    id: 6, 
    url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600', 
    titulo: 'Logística Inteligente', 
    desc: 'Módulo de geolocalización y ruteo optimizado para flotas de distribución con actualización de estados asíncrona.' 
  }
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
    <div className="dashboard-content">
      {/* Envoltorio que comparte la misma clase y estructura visual que tus perfiles */}
      <div className="profile-section-block">
        <h2>Galería de Trabajos Realizados</h2>
        <p style={{ marginBottom: '30px', color: 'var(--text)' }}>
          Portafolio oficial de soluciones digitales y sistemas robustos puestos en producción por el equipo de MocoSoft.
        </p>

        {/* Grilla simétrica perfectamente alineada */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px', width: '100%' }}>
          {trabajosMocoSoft.map((trabajo, index) => (
            <div 
              key={trabajo.id} 
              className="card shiny-effect" 
              style={{ padding: '0', overflow: 'hidden', cursor: 'pointer', minHeight: 'auto' }}
              onClick={() => abrirLightbox(trabajo, index)}
            >
              <img 
                src={trabajo.url} 
                alt={trabajo.titulo} 
                style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} 
              />
              <div style={{ padding: '20px', textAlign: 'left' }}>
                <h4 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--primary)' }}>{trabajo.titulo}</h4>
                <p style={{ margin: '8px 0 0 0', fontSize: '0.85rem', color: 'var(--text)', lineHeight: '1.5' }}>
                  {trabajo.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* INTERFAZ DEL LIGHTBOX INTERACTIVO (CONSIGNAS OBLIGATORIAS) */}
        {modalImagen && (
          <div 
            onClick={cerrarLightbox}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
            }}
          >
            {/* Botón de cierre */}
            <button onClick={cerrarLightbox} style={{ position: 'absolute', top: '20px', right: '30px', background: 'none', border: 'none', color: 'white', fontSize: '2.5rem', cursor: 'pointer' }}>×</button>
            
            {/* Contenedor de navegación interna */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', maxWidth: '95%', maxHeight: '75vh' }}>
              <button onClick={retroceder} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', fontSize: '2rem', width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer' }}>‹</button>
              <img src={modalImagen.url} alt={modalImagen.titulo} style={{ maxHeight: '70vh', maxWidth: '100%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} />
              <button onClick={avanzar} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', fontSize: '2rem', width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer' }}>›</button>
            </div>

            <div style={{ color: 'white', marginTop: '15px', textAlign: 'center', padding: '0 20px' }}>
              <h3 style={{ color: 'white', margin: 0 }}>{modalImagen.titulo}</h3>
              <p style={{ color: '#cbd5e1', margin: '5px 0 0 0', fontSize: '0.9rem' }}>{modalImagen.desc} (ESC para salir)</p>
            </div>
          </div>
        )}

        {/* Botón de retorno consistente */}
        <div className="back-button-container" style={{ marginTop: '40px', width: '100%', textAlign: 'left' }}>
          <Link to="/" className="btn-secondary">← Volver al Inicio</Link>
        </div>
      </div>
    </div>
  );
}

export default Galeria;