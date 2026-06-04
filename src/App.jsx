import { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Explorador from './pages/Explorador';
import Bitacora from './pages/Bitacora';
import Perfil from './pages/Perfil';
import Contacto from './pages/Contacto';
import ApiNoticias from './pages/ApiNoticias'; 

function App() {
  
  const [darkMode, setDarkMode] = useState(false);

  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      {/* 🌟 Al ponerlo acá, escucha de forma global cualquier cambio de página */}
      <ScrollToTop />
      
      <div className={`dashboard-layout ${darkMode ? 'dark-theme' : ''}`}>
        
        
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        
        <div className="dashboard-content">
          <Routes>
            {/* 1. Ruta de Inicio */}
            <Route path="/" element={<Home />} />
            
            {/* 2. Ruta del Explorador */}
            <Route path="/explorador" element={<Explorador />} />

            {/* 3. Bitácora */}
            <Route path="/bitacora" element={<Bitacora />} />

            {/* 4. Perfil */}
            <Route path="/perfil/:id" element={<Perfil darkMode={darkMode} />} />

            {/* 5. Novedades / Noticias Tech */}
            <Route path="/noticias" element={<ApiNoticias />} />

            {/* 6. Contacto */}
            <Route path="/contacto" element={<Contacto />} />
          </Routes>

          <footer>
            <p>&copy; 2026 MocoSoft - Todos los derechos reservados - Trabajo Práctico 2</p>
            <address id="correo">Contacto: </address>
          </footer>

        </div>

      </div>
    </Router>
  );
}

export default App;