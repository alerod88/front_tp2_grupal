function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Consulta enviada con éxito! El equipo de MocoSoft se pondrá en contacto pronto.");
  };

  return (
    <div className="contact-container">
      <h2>Formulario de Consulta</h2>
      <p style={{ textAlign: 'center', marginBottom: '20px', maxWidth: '500px' }}>
        Dejanos tu mensaje o propuesta institucional. Nuestro equipo técnico te responderá a la brevedad.
      </p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="text" placeholder="Asunto" required />
        <textarea placeholder="Escribí tu consulta aquí..." required></textarea>
        <button type="submit">Enviar Consulta</button>
      </form>
    </div>
  );
}

export default Contacto;