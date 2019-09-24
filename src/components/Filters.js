import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Filters.scss'

const Filter = props => {
  const {query, filterName, chooseGender, getRole} = props; 
  return ( <React.Fragment>
    <div className="filters_container">
      <label htmlFor="input" className="input-label">Filtra por personaje: </label>
      <input type="text" id="input" className="input" value={query} onChange={filterName}></input>

      <label htmlFor="gender" className="select-label">Filtra por género: </label>
        <select id="gender" className="select" onChange={chooseGender}>
          <option value="all gender">All gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="unknown">Unknown</option>
        </select> 

      <label htmlFor="todos" className="radio_label">
        <input type="radio" id="todos" name="role" value="todos" className="role_radio" onClick={getRole}/>Todos
      </label>
      <label htmlFor="protagonista" className="radio_label">
        <input type="radio" id="protagonista" name="role" value="protagonista" className="role_radio" onClick={getRole}/>Protagonistas
      </label>
      <label htmlFor="principal" className="radio_label">
        <input type="radio" id="principal" name="role" value="principal"className="role_radio" onClick={getRole}/>Principales
      </label>
      <label htmlFor="extra" className="radio_label">
        <input type="radio" id="extra" name="role" value="extra"className="role_radio" onClick={getRole}/>Extras
      </label>
    </div>
    </React.Fragment>
  ); 
}

Filter.propTypes = {
  query: PropTypes.string.isRequired, 
  filterName: PropTypes.func.isRequired,
  chooseGender: PropTypes.func.isRequired,
  getRole: PropTypes.func.isRequired,
}

export default Filter; 