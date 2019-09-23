import React from 'react';
import './App.css';
import CharacterDetail from './components/CharacterDetail'; 
import Home from './components/Home';


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
          <Home 
            query={query}
            filterName={this.filterName}
            data={data}             
            />
          <CharacterDetail />
        </main>
        <footer>¡Footer!</footer>
      </div>
    );
  }
}

export default App;
