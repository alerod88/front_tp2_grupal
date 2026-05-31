function Bitacora() {
  return (
    <div style={{ padding: '10px' }}>
      <h2>Bitácora de Proyecto: MocoSoft</h2>
      <p style={{ textAlign: 'left', margin: '10px 0 30px 0' }}>
        Registro de desarrollo, roles y análisis técnico de la evolución de nuestra plataforma.
      </p>

      {/* 1. Justificación Técnica de la Migración */}
      <section style={{ marginBottom: '40px', background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.02)' }}>
        <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>Justificación de Migración a React [cite: 55]</h3>
        <p style={{ textSelf: 'left', textAlign: 'justify', fontSize: '0.95rem', color: '#555', marginBottom: '10px' }}>
          La transición desde nuestra estructura estática original (HTML/JS Vanilla) hacia una arquitectura orientada a objetos y componentes en React fue motivada por la necesidad de escalabilidad y mantenibilidad. En el modelo anterior, la manipulación directa del DOM mediante instrucciones imperativas (como <code>innerHTML</code>) generaba un código propenso a errores y difícil de sincronizar.
        </p>
        <p style={{ textSelf: 'left', textAlign: 'justify', fontSize: '0.95rem', color: '#555' }}>
          Al migrar a una <strong>Single Page Application (SPA)</strong>, logramos una experiencia fluida gestionada dinámicamente por <strong>React Router</strong>, evitando recargas innecesarias del navegador. Además, la declaración de estados mutables mediante <code>useState</code> nos permite procesar filtros en tiempo real sobre estructuras JSON de forma eficiente y limpia, delegando la renderización de la interfaz en el motor virtual de React.
        </p>
      </section>

      {/* 2. Tabla de Roles y Flujo de Trabajo */}
      <h3>Flujo de Trabajo y Roles </h3>
      <table className="bitacora-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Responsable</th>
            <th>Roles y Tareas Documentadas </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>May 2026 </strong></td>
            <td>Equipo MocoSoft</td>
            <td>
              <strong>Metodología:</strong> Scrum básico coordinado mediante Trello. <br />
              <strong>Control de Versiones:</strong> Estrategia GitFlow simplificada (Ramas *main* para deploys estables y ramas *feature/* para componentes independientes).
            </td>
          </tr>
          <tr>
            <td>30/05/2026</td>
            <td>Sergio Daniel Galván</td>
            <td>Diseño de la estructura del proyecto en Vite, maquetación de componentes visuales de las tarjetas y optimización de assets.</td>
          </tr>
          <tr>
            <td>31/05/2026</td>
            <td>Victor Álvarez</td>
            <td>Estructuración de vistas globales, configuración de la paleta de estilos y el layout responsivo del Dashboard principal.</td>
          </tr>
          <tr>
            <td>31/05/2026</td>
            <td>Alejandro S. Rodriguez</td>
            <td>Implementación de lógica de enrutamiento mediante React Router y desarrollo del módulo del explorador dinámico de datos JSON.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Bitacora;