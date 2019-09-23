import React from 'react';
import './App.css';
import Filters from './components/Filters';


const endpoint = 'https://rickandmortyapi.com/api/character/';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      query: '',
    }
  this.filterName=this.filterName.bind(this);
  }

componentDidMount() {
  this.getData()
}

  getData ()  {
    fetch(endpoint)
      .then(res => res.json())
      .then(result=> {
        this.setState({
          data:result.results
        })
      }, 
 );
     
  }

filterName(event) {
  const value = event.currentTarget.value
  this.setState({
    query:value
  })
}

  render() {
    const {data, query } = this.state;
    return (
      <div className="app">
        <header className="app_header">
          <h1 className="app_title">Rick and Morty</h1>
        </header>
        <main>
          <Filters 
            query={query}
            filterName={this.filterName}
              />
          
          <ul className="rick_list">
            {data
              .filter(item=>item.name.toUpperCase().includes(query.toUpperCase()))
              .map(item=> <li className="rick_element" id={item.id} key={item.id}>
              <div className="rick_card">
                <img src={item.image} alt="" className="rick_picture"></img>
                <h2 className="rick_name">{item.name}</h2>
                <h3 className="rick_species">{item.species}</h3>
              </div>
              </li>)}
          </ul>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
