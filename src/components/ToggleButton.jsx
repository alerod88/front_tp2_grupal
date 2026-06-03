import React from 'react';

// Es clave que 'isDark' y 'onToggle' estén encerrados entre llaves {}
function ToggleButton({ isDark, onToggle }) {
  return (
    <button 
      onClick={onToggle} 
      className="btn-primary btn-toggle-dark" 
      style={{ 
        fontSize: '0.9rem', 
        padding: '10px 25px', 
        marginTop: '20px', 
        background: isDark ? '#f1c40f' : '#2c3e50', 
        color: isDark ? '#1a1d20' : '#ffffff',
        transition: 'all 0.3s ease',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        fontWeight: '600'
      }}
    >
      {isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
    </button>
  );
}

export default ToggleButton;