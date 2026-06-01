import { useState } from 'react';
import Card from '../components/Card';

function Home() {
  
  const [mostrarProposito, setMostrarProposito] = useState(false);

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
        <section id="nosotros" className="team-container">
          <h2>Nuestros Integrantes</h2>
          <div className="grid-integrantes">
            <Card urlPerfil="/perfil/sergio" imgAvatar="/img/avatarsergio.png" nombre="Sergio Daniel Galván" />
            <Card urlPerfil="/perfil/victor" imgAvatar="/img/avatarvictor.png" nombre="Victor Álvarez" />
            <Card urlPerfil="/perfil/alejandro" imgAvatar="/img/avataralejandro.png" nombre="Alejandro Sebastian Rodriguez" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;