import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Explorador from './pages/Explorador';
import Bitacora from './pages/Bitacora';
import Perfil from './pages/Perfil';
import ApiExterna from './pages/ApiExterna';


function App() {
  return (
    <Router>
      {/* Contenedor general del Dashboard */}
      <div className="dashboard-layout">
        
        {/* La Sidebar se queda fija a la izquierda */}
        <Sidebar />

        {/* El contenido de la derecha cambia según la ruta */}
        <div className="dashboard-content">
          <Routes>
            {/* 1. Ruta de Inicio */}
            <Route path="/" element={<Home />} />
            
            {/* 2. Ruta del Explorador (La metemos acá adentro) */}
            <Route path="/explorador" element={<Explorador />} />

            {/* 3. Bitacpra*/}
            <Route path="/bitacora" element={<Bitacora />} />

            {/* 4. Perfil*/}
            <Route path="/perfil/:id" element={<Perfil />} />

            {/* 5. ApiExterna*/}
            <Route path="/api" element={<ApiExterna />} />
            
            {/* Las que sumen después, como Bitácora o API, también van acá */}
            {/* <Route path="/bitacora" element={<Bitacora />} /> */}
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