import React from 'react'; 
import {Link} from 'react-router-dom';

const CharacterDetail = props => {
  const {routerProps, data} = props; 
  const ID = parseInt(routerProps.match.params.id);
  const rick = data.find(data => data.id === ID);
  return(
    <React.Fragment>
      <div className="rick_card">
        <img src={rick.image} alt={rick.name} className="rick_picture"></img>
        <h2 className="rick_name">{rick.name}</h2>
        <h3 className="rick_species">Status: {rick.status}</h3>
        <h3 className="rick_species">Species: {rick.species}</h3>
        <h3 className="rick_species">Origin: {rick.origin.name}</h3>
        <h3 className="rick_species">Episodes: {rick.species}</h3>
      </div>

    <Link to="/">Volver</Link>
    </React.Fragment>
  );
}


export default CharacterDetail; 