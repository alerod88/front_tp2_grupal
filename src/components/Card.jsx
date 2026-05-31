import { Link } from 'react-router-dom';

function Card({ urlPerfil, imgAvatar, nombre }) {
  return (
    <Link to={urlPerfil} className="card">
      <div className="card-img">
        <img src={imgAvatar} alt={`Avatar de ${nombre}`} />
      </div>
      <h3>{nombre}</h3>
      <span className="view-profile">Perfil</span>
    </Link>
  );
}

export default Card;