import React from 'react'; 
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const Home = props => {
  const {query, filterName, data} = props; 
  return (
    <React.Fragment>
      <Filters 
        query={query}
        filterName={filterName}
      />
      <CharacterList 
        data={data}   
        query={query}     
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