import React from 'react';
import './App.css';


const endpoint = 'https://rickandmortyapi.com/api/character/';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
    }
  
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



  render() {
    const {data} = this.state;
    return (
      <div className="app">
        <header className="app_header">
          <h1 className="app_title">Rick and Morty</h1>
        </header>
        <main>
          <ul className="rick_list">
            {data.map(item=> <li className="rick_element" id={item.id}>
              <div className="rick_card">
                <img src={item.image} alt="" className="rick_picture"></img>
                <h2 className="rick_name">{item.name}</h2>ç
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
