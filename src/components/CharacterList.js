import React from 'react';
import PropTypes from 'prop-types';

const CharacterList = props => {
  const {data, query} = props;
  return(
    <ul className="rick_list">
      {data
        .filter(item=>item.name.toUpperCase().includes(query.toUpperCase()))
        .map(item=>
         <li className="rick_element" id={item.id} key={item.id}>
          <div className="rick_card">
            <img src={item.image} alt="" className="rick_picture"></img>
            <h2 className="rick_name">{item.name}</h2>
            <h3 className="rick_species">{item.species}</h3>
          </div>
         </li>)}
    </ul>
  );
}

CharacterList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objects).isRequired ,
  query: PropTypes.string.isRequired, 
}


export default CharacterList; 