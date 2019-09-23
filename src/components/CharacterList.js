import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
  const {data, query} = props;
  return(
    <ul className="rick_list">
      {data
        .filter(item=>item.name.toUpperCase().includes(query.toUpperCase()))
        .map(item=>
         <li className="rick_element" id={item.id} key={item.id}>
          <CharacterCard
            image={item.image}
            name={item.name}
            species={item.species}
            />
         </li>)}
    </ul>
  );
}

CharacterList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired ,
  query: PropTypes.string.isRequired, 
}


export default CharacterList; 