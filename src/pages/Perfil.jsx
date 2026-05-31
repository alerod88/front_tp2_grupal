import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import listaIntegrantes from '../data/integrantes.json';

function Perfil() {
  // Leemos el parámetro de la URL (ej: 'sergio', 'victor', 'alejandro')
  const { id } = useParams();
  const integrante = listaIntegrantes[id];

  // Estado para manejar el carrusel de proyectos
  const [proyectoActivo, setProyectoActivo] = useState(0);

  // Si alguien escribe una URL que no existe, mostramos un aviso
  if (!integrante) {
    return <div style={{ padding: '20px' }}><h2>Integrante no encontrado</h2><Link to="/">Volver al inicio</Link></div>;
  }

  // Funciones para avanzar/retroceder en el carrusel
  const siguienteProyecto = () => {
    setProyectoActivo((prev) => (prev === integrante.proyectos.length - 1 ? 0 : prev + 1));
  };

  const anteriorProyecto = () => {
    setProyectoActivo((prev) => (prev === 0 ? integrante.proyectos.length - 1 : prev - 1));
  };

  return (
    <div className="profile-container">
      <div className="card-individual">
        <div>
        <Link to="/" style={{ float: 'left', textDecoration: 'none', color: 'var(--accent)' }}>← Volver</Link>
        </div>
        <br></br>
        <img src={integrante.avatar} alt={integrante.nombre} className="profile-avatar" />
        <h2>{integrante.nombre}</h2>
        <h4 style={{ color: 'var(--accent)', marginBottom: '15px' }}>{integrante.rol}</h4>
        <p style={{ maxWidth: '500px', margin: '0 auto 30px auto', color: '#666' }}>{integrante.bio}</p>

        {/* --- REQUERIMIENTO: Barras de Progreso de Habilidades --- */}
        <div style={{ margin: '30px 0', textAlign: 'left' }}>
          <h3>Stack Técnico (Habilidades)</h3>
          {integrante.habilidades.map((hab, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'between', marginBottom: '5px' }}>
                <span style={{ fontWeight: '600', flex: 1 }}>{hab.nombre}</span>
                <span>{hab.porcentaje}</span>
              </div>
              {/* Contenedor de la barra */}
              <div style={{ background: '#eee', borderRadius: '10px', height: '10px', width: '100%', overflow: 'hidden' }}>
                {/* Barra rellena animada por CSS */}
                <div style={{ background: 'var(--accent)', height: '100%', width: hab.porcentaje, transition: 'width 1s ease-in-out' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* --- REQUERIMIENTO: Carrusel de Proyectos Manual --- */}
        <div style={{ margin: '40px 0', background: '#f8f9fa', padding: '20px', borderRadius: '12px', position: 'relative' }}>
          <h3>Carrusel de Proyectos</h3>
          
          <div style={{ minHeight: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px 0' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>
              {integrante.proyectos[proyectoActivo].titulo}
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#555' }}>
              {integrante.proyectos[proyectoActivo].desc}
            </p>
          </div>

          {/* Controles del Carrusel */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <button onClick={anteriorProyecto} className="btn-primary" style={{ padding: '8px 20px', margin: 0 }}>Anterior</button>
            <button onClick={siguienteProyecto} className="btn-primary" style={{ padding: '8px 20px', margin: 0 }}>Siguiente</button>
          </div>
          <span style={{ fontSize: '0.8rem', color: '#999', display: 'block', marginTop: '10px' }}>
            Proyecto {proyectoActivo + 1} de {integrante.proyectos.length}
          </span>
        </div>

        {/* Redes Sociales Basicas */}
        <div style={{ marginTop: '20px' }}>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="view-profile" style={{ marginRight: '15px' }}>GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="view-profile">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default Perfil;