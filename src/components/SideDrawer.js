import React from 'react'
import styled from 'styled-components';


const Icon = styled.div`
  width: 100%;
  position: fixed;;
  top: 0;
  display: flex;
  align-items: center;
  left: 0;
  margin: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  
`;

const Drawer = styled.nav`
  height: 100%;
  color: white;
  background: black;
  border-right: 1px solid black;
  box-shadow: 2px 2px 32px black;
  position: fixed;
  top: 0;
  left: 0;
  width: 350px;
  max-width: 70%;
  padding: 1rem;
  z-index: 200;
  transform: ${props => props.show ? "translateX(0px)" : "translateX(-400px)" };
  transition: transform 0.3s ease-out;
`

const Model = styled.div`
  position: fixed;
  display: ${props => props.show ? "block" : "none"};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(22, 22, 22, 0.7);
  z-index: 100;
`

const SideDrawer = (props) => {
  return (
    <React.Fragment>
      <Icon id="Icon" {...props} onClick={props.clicked}>
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="28px" viewBox="0 0 459 459">
          <g>
            <g>
              <path d="M0,382.5h459v-51H0V382.5z M0,255h459v-51H0V255z M0,76.5v51h459v-51H0z"/>
            </g>
          </g>
        </svg>
      </Icon>
      <Model id="Model" {...props} onClick={props.clicked}/>
      <Drawer id="Drawer" {...props}>
        <h1>Side Bar Header</h1>
        <hr />
        <ul>
          <li><a href="/one">Link 1</a></li>
          <li><a href="/two">Link 2</a></li>
          <li><a href="/three">Link 3</a></li>
        </ul>
      </Drawer>
    </React.Fragment>
  )
}

export default SideDrawer
