import React from 'react'; 
import PropTypes from 'prop-types';
import '../styles/CharacterCard.scss';

const CharacterCard = props => {
  const {image, name, species} = props;
  return (
    <div className="rick_card">
      <img src={image} alt={name} className="rick_picture"></img>
      <h2 className="rick_name">{name}</h2>
      <h3 className="rick_species">{species}</h3>
    </div>
  ); 
}

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired ,
  name: PropTypes.string.isRequired ,
  species:  PropTypes.string.isRequired ,
}




export default CharacterCard; 