import React from 'react'; 
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';

const Home = props => {
  const {query, filterName, data, gender, chooseGender, getRole, role, type, chooseType} = props; 
  return (
    <React.Fragment>
      <Filters 
        query={query}
        filterName={filterName}
        chooseGender={chooseGender}
        getRole={getRole}
        type={type}
        chooseType={chooseType}
      />
      <CharacterList 
        data={data}   
        query={query}  
        gender={gender}
        role={role}  
        type={type}
      />
  </React.Fragment>
  ); 
}

Home.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired ,
  query: PropTypes.string.isRequired, 
  filterName: PropTypes.func.isRequired,
  chooseGender: PropTypes.func.isRequired,
  gender: PropTypes.string.isRequired,
  getRole: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  chooseType: PropTypes.func.isRequired,
}


export default Home; 