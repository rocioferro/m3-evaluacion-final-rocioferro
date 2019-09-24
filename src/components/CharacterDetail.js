import React from 'react'; 
import {Link} from 'react-router-dom';
import '../styles/CharacterDetail.scss';

const CharacterDetail = props => {
  const {routerProps, data} = props; 
  const ID = parseInt(routerProps.match.params.id);
  const rick = data.find(data => data.id === ID);
  if (rick) {
  return(
    <React.Fragment>
      <div className="detail_container">
        <div className="rick_card-detail">
          <img src={rick.image} alt={rick.name} className="rick_picture-detail"></img>
          <h2 className="rick_name-detail">{rick.name}</h2>
          <h3 className="rick_status">Status: {rick.status}</h3>
          <h3 className="rick_species">Species: {rick.species}</h3>
          <h3 className="rick_origin">Origin: {rick.origin.name}</h3>
          <h3 className="rick_episode">Episodes: {rick.episode.length}</h3>
        </div>
        <div className="link_container">
          <Link to="/" className="detail_link">Volver</Link>
        </div>
      </div>
    </React.Fragment>
    );
    } else {
      return (
        <React.Fragment>
          <h3 className="error_warning">La página que buscas no existe</h3>
          <Link to="/" className="detail_link">Volver</Link>
        </React.Fragment> 
      );
    }
  
}


export default CharacterDetail; 