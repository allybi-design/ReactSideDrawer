import React, {Component} from 'react';
import SideDrawer from "./components/SideDrawer"

import './App.css';

import styled from 'styled-components';

const AppWrapper= styled.div`
  background: ${props => props.inverse ? "black" : "white"}
`

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
      <AppWrapper id="AppWrapper" inverse>
        <SideDrawer show={this.state.isDrawerOpen} clicked={this.ToggleClickHandler}/>
      </AppWrapper>
    );
  }
}

export default App;
