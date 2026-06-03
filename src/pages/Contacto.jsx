import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contacto() {
  
  const [state, handleSubmit] = useForm("https://formspree.io/f/xnjyazaq");

  // Si el formulario se envió con éxito, mostramos un mensaje premium de agradecimiento
  if (state.succeeded) {
    return (
      <div className="contact-container">
        <div className="contact-form" style={{ textAlign: 'center', padding: '50px 30px' }}>
          <h2 style={{ color: 'var(--accent)', marginBottom: '15px' }}>¡Mensaje Enviado!</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text)' }}>
            Gracias por comunicarte con <strong>MocoSoft</strong>. Nuestro equipo técnico revisará tu consulta y te responderá a la brevedad.
          </p>
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
        <div style={{ textAlignment: 'left', width: '100%' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', textAlign: 'left' }}>
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
            style={{ color: '#ff7675', fontSize: '0.85rem', marginTop: '5px', display: 'block', textAlign: 'left' }}
          />
        </div>

        <div style={{ textAlignment: 'left', width: '100%' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', textAlign: 'left' }}>
            Mensaje / Consulta
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribí los detalles de tu consulta..."
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            style={{ color: '#ff7675', fontSize: '0.85rem', marginTop: '5px', display: 'block', textAlign: 'left' }}
          />
        </div>

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? 'Enviando...' : 'Enviar Consulta'}
        </button>
      </form>
    </div>
  );
}

export default Contacto;