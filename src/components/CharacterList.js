import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';
import '../styles/CharacterList.scss'

const CharacterList = props => {
  const {data, query, gender} = props;
  return(
    <ul className="rick_list">
      {data
        .filter(item=> 
          {if(gender==='all gender') {
            return (item)
          } else {
            return item.gender === gender
          }})
        .filter(item=>item.name.toUpperCase().includes(query.toUpperCase()))
        .map(item=>
         <li className="rick_element" id={item.id} key={item.id}>
           <Link to={`/detail/${item.id}`} className="link">
          <CharacterCard
            image={item.image}
            name={item.name}
            species={item.species}
            />
            </Link>
         </li>)}
    </ul>
  );
}

CharacterList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired ,
  query: PropTypes.string.isRequired, 
}


export default CharacterList; 