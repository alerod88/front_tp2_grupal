import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/img/logo.png" alt="Logo MocoSoft" />
        <h2>MocoSoft</h2>
      </div>
      
      <nav className="sidebar-menu">
        {/* Sección de Navegación General */}
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Inicio
        </NavLink>
        <NavLink to="/bitacora" className={({ isActive }) => isActive ? 'active' : ''}>
          Bitácora
        </NavLink>

        <div className="sidebar-section-title">Integrantes</div>
        <NavLink to="/perfil/sergio" className={({ isActive }) => isActive ? 'active sublink' : 'sublink'}>
          • Sergio Galván
        </NavLink>
        <NavLink to="/perfil/victor" className={({ isActive }) => isActive ? 'active sublink' : 'sublink'}>
          • Victor Álvarez
        </NavLink>
        <NavLink to="/perfil/alejandro" className={({ isActive }) => isActive ? 'active sublink' : 'sublink'}>
          • Alejandro Rodriguez
        </NavLink>

        <NavLink to="/explorador" className={({ isActive }) => isActive ? 'active' : ''}>
          Explorador JSON
        </NavLink>
        <NavLink to="/api" className={({ isActive }) => isActive ? 'active' : ''}>
          API Externa
        </NavLink>

        
      </nav>
    </div>
  );
}

export default Sidebar;