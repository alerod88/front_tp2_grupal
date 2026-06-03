import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  // Estado para controlar si el menú está abierto o cerrado en celulares
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          {/* Aseguramos la barra inicial / para que Vercel encuentre el logo */}
          <img src="/img/logo.png" alt="Logo MocoSoft" />
          <h2>MocoSoft</h2>
        </div>
        
        {/* BOTÓN HAMBURGUESA: Cambia el estado entre true y false al tocarlo */}
        <button className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)}>
          {menuAbierto ? '✕' : '☰'}
        </button>
      </div>
      
      {/* CLAVE RESPONSIVE: Si menuAbierto es true, se le agrega la clase 'mostrar'.
        Además, al hacer clic en cualquier link, el menú se cierra solo (setMenuAbierto(false))
      */}
      <nav 
        className={`sidebar-menu ${menuAbierto ? 'mostrar' : ''}`} 
        onClick={() => setMenuAbierto(false)}
      >
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Inicio
        </NavLink>
        <NavLink to="/bitacora" className={({ isActive }) => isActive ? 'active' : ''}>
          Bitácora
        </NavLink>
        <NavLink to="/explorador" className={({ isActive }) => isActive ? 'active' : ''}>
          Explorador JSON
        </NavLink>
        <NavLink to="/api" className={({ isActive }) => isActive ? 'active' : ''}>
          API Externa
        </NavLink>
        <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>
          Contacto
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
      </nav>
    </div>
  );
}

export default Sidebar;