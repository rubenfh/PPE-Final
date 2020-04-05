import React, { Component } from 'react';
import './App.css';
import Topnav  from './Widgets/TopNavBar/TopNavBar';
import axios from 'axios';
import Homepage from './Widgets/Homepage/Homepage';
import Header from './Widgets/Header/Header';
import Panier from './Widgets/Panier/Panier';
import Vendre from './Widgets/VendrePage/Vendre';

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
            </div>
    );
  }
}

export default App;