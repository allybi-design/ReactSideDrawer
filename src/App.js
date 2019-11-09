import React, {Component} from 'react';
// import styled from 'styled-components';

import SideDrawer from "./components/SideDrawer"

import './App.css';

class App extends Component {
  state = {
    isDrawerOpen : false
  }

  ToggleClickHandler = (params) => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    })
  }

  render () {
    return (
      <div className="App">
        <SideDrawer show={this.state.isDrawerOpen} clicked={this.ToggleClickHandler}/>
      </div>
    );
  }
}

export default App;
