import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import datosAlejandro from '../data/alejandro.json';
import datosSergio from '../data/sergio.json';
import datosVictor from '../data/victor.json';
import ToggleButton from '../components/ToggleButton';

const perfiles = {
  alejandro: datosAlejandro,
  sergio: datosSergio,
  victor: datosVictor
};

function Perfil() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 🌙 Estado para el Modo Oscuro Integral
  const [darkMode, setDarkMode] = useState(false);
  
  // 🎢 Estados para el Carrusel de Proyectos con Deslizamiento
  const [indexProyecto, setIndexProyecto] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  // Referencia para controlar el temporizador del carrusel
  const autoPlayRef = useRef(null);

  const integrante = perfiles[id];

  // 🔮 LÓGICA DE AUTOPLAY & TRANSICIÓN: Rotación automática con efecto de empuje lateral
  const iniciarAutoplay = () => {
    detenerAutoplay();
    if (integrante && integrante.proyectos && integrante.proyectos.length > 1) {
      autoPlayRef.current = setInterval(() => {
        dispararDeslizamiento((prev) => (prev + 1) % integrante.proyectos.length);
      }, 4000);
    }
  };

  const detenerAutoplay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const dispararDeslizamiento = (nuevoIndexFn) => {
    setAnimating(true); // Activa el slide-exit hacia la izquierda
    setTimeout(() => {
      setIndexProyecto(nuevoIndexFn);
      setAnimating(false); // Apaga el exit para que el nuevo entre flotando
    }, 250); // Sincronizado con el tiempo de transición CSS
  };

  // Temporizador al cargar el componente
  useEffect(() => {
    iniciarAutoplay();
    return () => detenerAutoplay();
  }, [integrante]);

  // Controles manuales que resetean el reloj para no interrumpir al usuario
  const siguienteProyecto = () => {
    dispararDeslizamiento((prev) => (prev + 1) % integrante.proyectos.length);
    iniciarAutoplay();
  };

  const anteriorProyecto = () => {
    dispararDeslizamiento((prev) => (prev - 1 + integrante.proyectos.length) % integrante.proyectos.length);
    iniciarAutoplay();
  };

  // Inyección de la clase dark-theme en el BODY de la web
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    return () => document.body.classList.remove('dark-theme');
  }, [darkMode]);

  // Inyección dinámica del CDN de Devicon para los iconos del Stack
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  if (!integrante) {
    return (
      <div className="profile-container">
        <div className="card-individual">
          <h2>Perfil no encontrado</h2>
          <button className="btn-primary" onClick={() => navigate('/')}>← Volver al Inicio</button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className={`card-individual ${darkMode ? 'perfil-dark' : ''}`}>
        
        {/* ✨ FOTO DE PERFIL CIRCULAR CON EFECTO DE DESTELLO RECORTADO */}
        <div className="profile-avatar-container shiny-effect">
          <img src={integrante.avatar} alt={integrante.nombre} className="profile-avatar" />
        </div>
        
        <h1 className="profile-title">{integrante.nombre}</h1>
        <p className="profile-sub"><strong>Ubicación:</strong> {integrante.ubicacion} | <strong>Edad:</strong> {integrante.edad}</p>

        <div className="info-grid">
          
          {/* Habilidades & Stack */}
          <section className="profile-section-block">
            <h3>Habilidades & Stack Técnico</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
              {integrante.habilidades.map((hab, index) => (
                <div key={index} className="skill-bar-wrapper">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '0.9rem', fontWeight: '500' }}>
                    <span>{hab.nombre}</span>
                    <span>{hab.porcentaje}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: `${hab.porcentaje}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tecnologías Principales */}
          <section className="profile-section-block">
            <h3>Tecnologías Principales</h3>
            <div className="tech-icons-grid">
              {integrante.techIcons.map((icon, index) => (
                <div key={index} className="tech-icon-card" title={icon.nombre}>
                  <i className={`${icon.clase} tech-icon-glyph`}></i>
                  <span className="tech-icon-text" style={{ fontSize: '0.8rem', marginTop: '4px' }}>{icon.nombre}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 🎢 CARRUSEL AUTOMÁTICO DE PROYECTOS CON DESLIZAMIENTO DENTRO DEL CONTENEDOR */}
          {integrante.proyectos && integrante.proyectos.length > 0 && (
            <section className="profile-section-block" style={{ gridColumn: '1 / -1' }} onMouseEnter={detenerAutoplay} onMouseLeave={iniciarAutoplay}>
              <h3>Proyectos Destacados</h3>
              <div className="carousel-wrapper" style={{ overflow: 'hidden' }}>
                <button className="carousel-arrow left" onClick={anteriorProyecto}>❮</button>
                
                {/* Control condicional de clases de deslizamiento horizontal */}
                <div className={`carousel-slide-content carousel-slide-animator ${animating ? 'slide-exit' : 'slide-enter'}`}>
                  <div className="carousel-image-container shiny-effect">
                    <img 
                      src={integrante.proyectos[indexProyecto].imagen} 
                      alt={integrante.proyectos[indexProyecto].titulo} 
                      onError={(e) => { e.target.src = 'https://placehold.co/600x350?text=MocoSoft+Proyecto'; }}
                    />
                  </div>
                  <div className="carousel-text-container">
                    <h4>{integrante.proyectos[indexProyecto].titulo}</h4>
                    <p>{integrante.proyectos[indexProyecto].descripcion}</p>
                    <span className="carousel-counter">Proyecto {indexProyecto + 1} de {integrante.proyectos.length}</span>
                  </div>
                </div>

                <button className="carousel-arrow right" onClick={siguienteProyecto}>❯</button>
              </div>
            </section>
          )}

          {/* 🎬 PELÍCULAS FAVORITAS (DISPOSICIÓN CINEMATOGRÁFICA EN UNA SOLA COLUMNA) */}
          {integrante.peliculas && integrante.peliculas.length > 0 && (
            <section className="info-section">
              <h3>Películas Favoritas</h3>
              <div className="multimedia-grid">
                {integrante.peliculas.map((peli, index) => (
                  <div key={index} className="film-card-new">
                    <div className="film-info-header">
                      <div className="film-poster-container shiny-effect">
                        <img src={peli.img} alt={peli.titulo} className="film-poster-new" />
                      </div>
                      <div className="film-meta-new">
                        <h4>{peli.titulo}</h4>
                        <span className="film-year-badge">{peli.anio}</span>
                        <p className="film-synopsis-new">{peli.sinopsis}</p>
                        <a href={peli.wiki} target="_blank" rel="noreferrer" className="film-wiki-link">Ver en Wikipedia ↗</a>
                      </div>
                    </div>
                    <div className="iframe-video-container">
                      <iframe width="100%" height="190" src={peli.trailer} title={peli.titulo} frameBorder="0" allowFullScreen></iframe>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 🎵 DISCOS FAVORITOS */}
          {integrante.discos && integrante.discos.length > 0 && (
            <section className="info-section">
              <h3>Música / Discos Favoritos</h3>
              <div className="multimedia-grid">
                {integrante.discos.map((disc, index) => (
                  <div key={index} className="disc-item">
                    <p>{disc.titulo}</p>
                    <iframe style={{ borderRadius: '12px' }} src={disc.embedUrl} width="100%" height="152" frameBorder="0" allowFullScreen="" loading="lazy"></iframe>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* 🔘 COMPONENTE REUTILIZABLE DEL BOTÓN MODO OSCURO */}
        <ToggleButton isDark={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        
        {/* 🚀 BOTÓN DE VOLVER REESTILIZADO SIN TEXTO RECTANGULAR ASIMÉTRICO */}
        <div className="back-button-container">
          <button className="btn-secondary" onClick={() => navigate('/')}>
            ← Volver al Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;