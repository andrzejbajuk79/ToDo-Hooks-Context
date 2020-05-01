import React, {Component} from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../context/ThemeContext';

const StyledNav = styled.nav`
 color: ${({theme}) => theme.syntax};
 background: ${({theme}) => theme.ui};
`;

class Navbar extends Component {
 // static contextType = ThemeContext;

 render() {
  // const {isLightTheme, light, dark} = this.context;
  // const theme = isLightTheme ? light : dark;

  return (
   <ThemeContext.Consumer>
    {(context) => {
     const {isLightTheme, light, dark} = context;
     const theme = isLightTheme ? light : dark;
     return (
      <StyledNav theme={theme}>
       <h1>Context App</h1>
       <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
       </ul>
      </StyledNav>
     );
    }}
   </ThemeContext.Consumer>
  );
 }
}

export default Navbar;
