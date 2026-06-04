import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom'; // 1. Importamos useNavigate

function Contacto() {
  // Configurado con tu ID de formulario real
  const [state, handleSubmit] = useForm("xnjyazaq");
  const navigate = useNavigate(); // 2. Inicializamos el hook de navegación

  // Mensaje de éxito al enviar
  if (state.succeeded) {
    return (
      <div className="contact-container">
        <div className="contact-form" style={{ textAlign: 'center', padding: '50px 30px' }}>
          <h2 style={{ color: 'var(--accent)', marginBottom: '15px' }}>¡Mensaje Enviado!</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text)', marginBottom: '25px' }}>
            Gracias por comunicarte con <strong>MocoSoft</strong>. Nuestro equipo técnico revisará tu consulta y te responderá a la brevedad.
          </p>
          
          {/* Botón Volver en la pantalla de Éxito */}
          <div className="back-button-container">
            <button className="btn-secondary" onClick={() => navigate('/')}>
              ← Volver al Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <h2>Formulario de Contacto</h2>
      <p style={{ marginBottom: '25px', fontSize: '1rem' }}>
        ¿Tenés un proyecto en mente? Dejanos tu mensaje y potenciemos juntos tu negocio.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        {/* Campo: Correo Electrónico */}
        <div style={{ textAlign: 'left', width: '100%' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            placeholder="ejemplo@correo.com"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            style={{ color: '#ff7675', fontSize: '0.85rem', marginTop: '5px', display: 'block' }}
          />
        </div>

        {/* Campo: Asunto */}
        <div style={{ textAlign: 'left', width: '100%' }}>
          <label htmlFor="subject" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            Asunto
          </label>
          <input
            id="subject"
            type="text" 
            name="subject"
            placeholder="Motivo de tu consulta (Ej: Presupuesto, Soporte...)"
            required
          />
          <ValidationError 
            prefix="Subject" 
            field="subject"
            errors={state.errors}
            style={{ color: '#ff7675', fontSize: '0.85rem', marginTop: '5px', display: 'block' }}
          />
        </div>

        {/* Campo: Mensaje / Consulta */}
        <div style={{ textAlign: 'left', width: '100%' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            Mensaje / Consulta
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribí los detalles de tu consulta técnica..."
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            style={{ color: '#ff7675', fontSize: '0.85rem', marginTop: '5px', display: 'block' }}
          />
        </div>

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? 'Enviando...' : 'Enviar Consulta'}
        </button>
      </form>

      

      {/* BOTÓN VOLVER */}
        <div className="back-button-container">
          <button className="btn-secondary" onClick={() => navigate('/')}>
            Volver a Inicio
          </button>
        </div>

    </div>
  );
}

export default Contacto;