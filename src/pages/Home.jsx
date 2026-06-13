import { useState } from 'react';
import Card from '../components/Card';
import marcasJSON from '../data/marcas.json';

function Home() {
  const [mostrarProposito, setMostrarProposito] = useState(false);

  // Conexión dinámica para el loop infinito del slider de logos
  const listaDuplicada = [...marcasJSON, ...marcasJSON];

  return (
    /* ✨ CAPA 1: Contenedor Maestro que respeta y se acopla a la Sidebar fija del Dashboard */
    <div className="dashboard-content">
      
      {/* ✨ CAPA 2: Envoltorio elástico inteligente. Centra todo el diseño sin usar medidas rígidas 
          para que se adapte perfectamente según el monitor donde lo veas */}
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>

        {/* 1. SECCIÓN HERO */}
        <header 
          className="hero" 
          style={{ 
            width: '100%',
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/img/hero-bg.jpg') center/cover no-repeat" 
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <img 
              src="/img/logo.png" 
              alt="Logo Corporativo MocoSoft" 
              style={{ 
                width: '200px', 
                marginBottom: '20px', 
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))' 
              }}
            />
          </div>

          <div className="hero-content">
            <h1>Innovación Colectiva</h1>
            <p>Somos un equipo apasionado por el desarrollo web, enfocados en crear soluciones digitales minimalistas y funcionales.</p>
            
            {/* 2. BOTÓN */}
            <button 
              className="btn-primary"
              onClick={() => setMostrarProposito(!mostrarProposito)}
            >
              {mostrarProposito ? "Ocultar Propósito" : "Conocer Propósito"}
            </button>

            {/* 3. RENDERIZADO CONDICIONAL DEL TEXTO */}
            {mostrarProposito && (
              <p id="mensaje-proposito" style={{ marginTop: '20px', fontSize: '1.1rem' }}>
                Nuestro objetivo es dominar las tecnologías del Frontend para transformar ideas en experiences reales.
              </p>
            )}
          </div>
        </header>

        {/* CONTENEDOR CENTRAL DE SECCIONES */}
        <main className="main-home-container" style={{ width: '100%' }}>

          {/* 3. SECCIÓN: QUIÉNES SOMOS */}
          <section className="profile-section-block" style={{ width: '100%', marginBottom: '40px' }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', margin: '0' }}>
                Quiénes Somos
              </h3>
            </div>

            <div className="quienes-somos-texto-wrapper">
              <p style={{ marginBottom: '15px', color: 'var(--text)', textAlign: 'justify', fontSize: '1.05rem' }}>
                En <strong>MocoSoft</strong> somos desarrolladores con una sólida y amplia trayectoria en el mercado de aplicaciones Web, liderando proyectos tecnológicos desde hace más de 10 años. Nos especializamos en diseñar estructuras robustas, ágiles y orientadas a brindar la mejor experiencia de usuario. 
                Contamos con un equipo multidisciplinario altamente calificado y nos mantenemos a la vanguardia de la industria, adoptando de forma nativa lo último en tecnologías de software y metodologías de desarrollo. Esto nos permite transformar requerimientos complejos en herramientas digitales escalables. 
                La confianza de nuestros clientes avala nuestro camino estratégico y nuestra inquebrantable dedicación a ofrecer soluciones de software de alta calidad, garantizando un rendimiento óptimo en cada producto que ponemos en producción.
              </p>
            </div>
          </section>

          {/* 4. SECCIÓN: NUESTROS INTEGRANTES */}
          <section id="nosotros" className="team-container" style={{ marginBottom: '50px', padding: '20px 0', width: '100%' }}>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '35px', textAlign: 'center' }}>
              Nuestros Integrantes
            </h2>
            <div className="grid-integrantes">
              <Card urlPerfil="/perfil/sergio" imgAvatar="/img/avatarsergio.png" nombre="Sergio Daniel Galván" />
              <Card urlPerfil="/perfil/victor" imgAvatar="/img/avatarvictor.png" nombre="Victor Álvarez" />
              <Card urlPerfil="/perfil/alejandro" imgAvatar="/img/avataralejandro.png" nombre="Alejandro Sebastian Rodriguez" />
            </div>
          </section>

          {/* 5. SECCIÓN: EMPRESAS QUE CONFÍAN */}
          <div style={{ width: '100%', marginTop: '50px', marginBottom: '40px', textAlign: 'center', overflow: 'hidden' }}>
            <h3 className="seccion-empresas-titulo" style={{ fontSize: '1.4rem', marginBottom: '25px', fontWeight: '600' }}>
              Empresas que confían en MocoSoft
            </h3>
            
            <div className="slider">
              <div className="slide-track">
                {listaDuplicada.map((marca, index) => (
                  <div className="slide" key={index}>
                    <img src={`/img/Logos/${marca.archivo}`} alt={`Logo de ${marca.nombre}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6. MAPA INTERACTIVO */}
          <div className="profile-section-block mapa-home-block" style={{ width: '100%', height: '350px', padding: '0', overflow: 'hidden', borderRadius: '12px' }}>
            <iframe 
              title="Ubicación Central MocoSoft"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4729388339174!2d-58.441865223395995!3d-34.6174828582236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca397379d03f%3A0xc3f6087754ba1d3b!2sAv.%20Carabobo%2025%2C%20C1406DGA%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1717460000000!5m2!1ses-419!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0, display: 'block' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </main>
      </div>
    </div>
  );
}

export default Home;