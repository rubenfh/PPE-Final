import React, { Component } from 'react';
import './App.css';
import Topnav  from './Widgets/TopNavBar/TopNavBar';
import Nav from './Widgets/Nav/Nav';
import axios from 'axios';

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
            <aside>
            <div className="row">
                <div className="col-8 col-sm-8 col-md-9 col-lg-9 col-xl-10">
                    <div className="divh">
            <Topnav/>
            <Nav/>
            </div>
                </div></div></aside>

    );
  }
}

export default App;