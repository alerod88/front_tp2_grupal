import { useState } from 'react';
import datosJSON from '../data/data.json'; // Importamos los 20 objetos

function Explorador() {
  const [busqueda, setBusqueda] = useState('');

  // Filtrado en tiempo real por nombre o categoría
  const datosFiltrados = datosJSON.filter((elemento) => {
    const termino = busqueda.toLowerCase();
    return (
      elemento.nombre.toLowerCase().includes(termino) ||
      elemento.categoria.toLowerCase().includes(termino)
    );
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Explorador de Datos de MocoSoft</h2>
      <p>Buscador interactivo con filtrado en tiempo real.</p>
      
      <input
        type="text"
        placeholder="Buscar por nombre o categoría..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '400px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {datosFiltrados.length > 0 ? (
          datosFiltrados.map((elemento) => (
            <div key={elemento.id} className="card" style={{ padding: '15px', border: '1px solid #333', borderRadius: '8px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#00ffcc' }}>{elemento.nombre}</h4>
              <span style={{ fontSize: '0.85em', background: '#333', padding: '3px 8px', borderRadius: '4px' }}>
                {elemento.categoria}
              </span>
              <p style={{ fontSize: '0.9em', marginTop: '10px' }}>{elemento.descripcion}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron resultados para "{busqueda}"</p>
        )}
      </div>
    </div>
  );
}

export default Explorador;