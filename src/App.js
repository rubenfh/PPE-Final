import React, { Component } from 'react';
import './App.css';
import Topnav  from './Widgets/TopNavBar/TopNavBar';
import Nav from './Widgets/Nav/Nav';
import axios from 'axios';
import Homepage from './Widgets/Homepage/Homepage';
import Header from './Header';
import Panier from './Panier';

class ComponentDidMount extends Component{
  componentDidMount() {
    axios.get('https://localhost:3001/users')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }
}

class App extends Component {

  render()
  {

    // {} will allow to reference the variables if dropdown button is clicked
    // don't put () next to clickDropDown or the method would be automatically executed
    //instead we pass a reference, we pass the address to that method
    return (
            <div>            
              <Header/>
              <Panier/>
              </div>
    );
  }
}

export default App;