import React from 'react';
import './App.scss';
import CharacterDetail from './components/CharacterDetail'; 
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.png'
import {getFetch} from './services/getFetch';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      query: '',
      gender: 'all gender',
      role: 'todos',
      type:'',
    }
  this.filterName=this.filterName.bind(this);
  this.chooseGender=this.chooseGender.bind(this);
  this.getRole=this.getRole.bind(this);
  this.chooseType=this.chooseType.bind(this);
  }

componentDidMount() {
  this.getData()
}

  getData ()  {
    getFetch()
      .then(result=> {
        this.setState({
          data:result.results
        })
      }, 
 );
}

chooseGender(event) {
  const gender = event.currentTarget.value
  this.setState({
    gender: gender
  })
}

filterName(event) {
  const value = event.currentTarget.value
  this.setState({
    query:value
  })
}

getRole(event) {
  const value = event.currentTarget.value
  this.setState({
    role:value
  })
}
chooseType (event) {
 const value = event.currentTarget.value
 this.setState({
   type:value
 })
}

  render() {
    const {data, query, gender, role, type } = this.state;
    return (
      <div className="app">
        <header className="app_header">
          <h1 className="app_title">Rick and Morty</h1>
          <img src={logo} alt="logo" className="logo_img"></img>
        </header>
        <main className="main">
          <Switch>
           <Route exact path="/" render={()=>
              <Home 
                query={query}
                filterName={this.filterName}
                data={data} 
                gender={gender}
                chooseGender={this.chooseGender}
                role={role}
                getRole={this.getRole}
                type={type}
                chooseType={this.chooseType}

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
        <footer className="footer">&copy; 2019</footer>
      </div>
    );
  }
}

export default App;
