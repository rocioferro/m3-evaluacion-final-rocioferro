import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
  const {query, filterName} = props; 
  return (
    <input type="text" className="input" value={query} onChange={filterName}></input>
  ); 
}

Filter.propTypes = {
  query: PropTypes.string.isRequired, 
  filterName: PropTypes.func.isRequired,
}

export default Filter; 