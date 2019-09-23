import React from 'react';
import './styles/App.scss';
import CharacterDetail from './components/CharacterDetail'; 
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.png'



// const endpoint = 'https://rickandmortyapi.com/api/character/';
const endpoint = 'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'


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
          <img src={logo} alt="logo" className="logo_img"></img>
        </header>
        <main>
          <Switch>
           <Route exact path="/" render={()=>
              <Home 
                query={query}
                filterName={this.filterName}
                data={data}             
             /> 
           }/>
           <Route path="/detail/:id" render={
              routerProps=>
              <CharacterDetail
                routerProps={routerProps}
                data={data}
              />
            }/>
          </Switch>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
