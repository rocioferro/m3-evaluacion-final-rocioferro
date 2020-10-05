import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Filters.scss'

const Filter = props => {
  const {query, filterName, chooseGender, getRole, type, chooseType} = props; 
  return ( <React.Fragment>
    <div className="filters_container">
      <div className="filters_section">
        <div className="filters_divider">
          <label htmlFor="input" className="label">Filtra por personaje: </label>
          <input type="text" id="input" className="input" value={query} onChange={filterName}></input>
        </div>
        <div className="filters_divider">
          <label htmlFor="gender" className="label">Filtra por género: </label>
            <select id="gender" className="input select" onChange={chooseGender}>
              <option value="all gender">All gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="unknown">Unknown</option>
            </select> 
        </div>
        </div>
      <div className="filters_section">
        <div className="filters_divider">
          <label htmlFor="todos" className="label radio_label">
            <input type="radio" id="todos" name="role" value="todos" className="role_radio" onClick={getRole}/>Todos
          </label>
          <label htmlFor="protagonista" className="label radio_label">
            <input type="radio" id="protagonista" name="role" value="protagonista" className="role_radio" onClick={getRole}/>Protagonistas
          </label>
          <label htmlFor="principal" className="label radio_label">
            <input type="radio" id="principal" name="role" value="principal"className="role_radio" onClick={getRole}/>Principales
          </label>
          <label htmlFor="extra" className="label radio_label">
            <input type="radio" id="extra" name="role" value="extra"className="role_radio" onClick={getRole}/>Extras
          </label>
        </div>
          <div className="filters_divider">
            <label htmlFor="type" className="label">Filtra por tipo: </label>
            <input type="text" id="type" className="input" value={type} onChange={chooseType}></input>
          </div>
      </div>
    </div>
    </React.Fragment>
  ); 
}

Filter.propTypes = {
  query: PropTypes.string.isRequired, 
  filterName: PropTypes.func.isRequired,
  chooseGender: PropTypes.func.isRequired,
  getRole: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  chooseType: PropTypes.func.isRequired,
}

export default Filter; 