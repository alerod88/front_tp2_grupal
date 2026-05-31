import { useState } from 'react';
import Card from '../components/Card';

function Home() {
  const [mostrarProposito, setMostrarProposito] = useState(false);

  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <div 
            className="hero" 
            style={{ 
              background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/img/hero-bg.jpg') center/cover no-repeat" 
            }}
          >
            <h1>Innovación Colectiva</h1>
            <p>Somos un equipo apasionado por el desarrollo web, enfocados en crear soluciones digitales minimalistas y funcionales.</p>
            <button className="btn-primary">Conocer Propósito</button>

            {mostrarProposito && (
            <p id="mensaje-proposito">
              Nuestro objetivo es dominar las tecnologías del Frontend para transformar ideas en experiencias reales.</p>
            )}
          </div>
          
        </div>
      </header>

      <main>
        <section id="nosotros" className="team-container">
          <h2>Nuestros Integrantes</h2>
          <div className="grid-integrantes">
            <Card urlPerfil="/perfil/sergio" imgAvatar="img/avatarsergio.png" nombre="Sergio Daniel Galván" />
            <Card urlPerfil="/perfil/victor" imgAvatar="img/avatarvictor.png" nombre="Victor Álvarez" />
            <Card urlPerfil="/perfil/alejandro" imgAvatar="img/avataralejandro.png" nombre="Alejandro Sebastian Rodriguez" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;