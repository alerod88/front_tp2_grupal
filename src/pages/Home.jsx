import { useState } from 'react';
import Card from '../components/Card';
import marcasJSON from '../data/marcas.json';

function Home() {
  
  const [mostrarProposito, setMostrarProposito] = useState(false);

  // Conexión dinámica: Generamos la lista doble uniendo dos veces el mismo JSON para el loop infinito
  const listaDuplicada = [...marcasJSON, ...marcasJSON];

  return (
    <>
      {/* 1. SECCIÓN HERO */}
      <header 
        className="hero" 
        style={{ 
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/img/hero-bg.jpg') center/cover no-repeat" 
        }}
      >
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
              Nuestro objetivo es dominar las tecnologías del Frontend para transformar ideas en experiencias reales.
            </p>
          )}
        </div>
      </header>

      {/* 4. SECCIÓN INTEGRANTES  */}
      <main>
        <div className="explorador-header">
          <div>
            <h2>Acerca de MocoSoft</h2>
            <p>Trayectoria, infraestructura y soluciones de software con impacto global.</p>
            <p>Somos desarrolladores de amplia trayectoria en el mercado de aplicaciones Web desde hace más de 10 años. Poseemos un amplio abanico de recursos humanos y lo último en tecnología de software. Nuestros clientes avalan nuestra trayectoria y nuestra dedicación a ofrecer soluciones de calidad.</p>
          </div>
        </div>

        {/* 3. SECCIÓN: NUESTROS INTEGRANTES (Uso modular de las tarjetas del equipo) */}
        <section id="nosotros" className="team-container" style={{ marginTop: '50px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '30px' }}>Nuestros Integrantes</h2>
          <div className="grid-integrantes">
            <Card urlPerfil="/perfil/sergio" imgAvatar="/img/avatarsergio.png" nombre="Sergio Daniel Galván" />
            <Card urlPerfil="/perfil/victor" imgAvatar="/img/avatarvictor.png" nombre="Victor Álvarez" />
            <Card urlPerfil="/perfil/alejandro" imgAvatar="/img/avataralejandro.png" nombre="Alejandro Sebastian Rodriguez" />
          </div>
        </section>

        {/* 4. SECCIÓN: EMPRESAS QUE CONFÍAN (Slider infinito como cierre premium de la Home) */}
        <div style={{ width: '100%', marginTop: '50px', marginBottom: '30px', textAlign: 'center', overflow: 'hidden' }}>
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
      </main>
    </>
  );
}

export default Home;