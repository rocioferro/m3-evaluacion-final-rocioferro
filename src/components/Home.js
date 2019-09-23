import React from 'react'; 
import Filters from './Filters';
import CharacterList from './CharacterList';

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



export default Home; 