import React from 'react'; 
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const Home = props => {
  const {query, filterName, data, gender, chooseGender} = props; 
  return (
    <React.Fragment>
      <Filters 
        query={query}
        filterName={filterName}
        chooseGender={chooseGender}
      />
      <CharacterList 
        data={data}   
        query={query}  
        gender={gender}  
      />
  </React.Fragment>
  ); 
}

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired ,
  query: PropTypes.string.isRequired, 
  filterName: PropTypes.func.isRequired,
}


export default Home; 