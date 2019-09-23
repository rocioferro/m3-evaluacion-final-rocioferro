import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
  const {query, filterName} = props; 
  return (
    <div className="input_container">
      <label htmlFor="input">Busca un personaje: </label>
      <input type="text" id="input" className="input" value={query} onChange={filterName}></input>
    </div>
  ); 
}

Filter.propTypes = {
  query: PropTypes.string.isRequired, 
  filterName: PropTypes.func.isRequired,
}

export default Filter; 