import React, {Component} from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../context/ThemeContext';
import {AuthContext} from '../context/AuthContext';

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
   <AuthContext.Consumer>
    {(authContext) => (
     <ThemeContext.Consumer>
      {(themeContext) => {
       const {isAuthenticated, toggleAuth} = authContext;
       const {isLightTheme, light, dark} = themeContext;
       const theme = isLightTheme ? light : dark;
       return (
        <StyledNav theme={theme}>
         <h1>Context App</h1>
         <div onClick={toggleAuth}>
          {isAuthenticated ? 'Logged In' : 'Logged out'}
         </div>
         <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
         </ul>
        </StyledNav>
       );
      }}
     </ThemeContext.Consumer>
    )}
   </AuthContext.Consumer>
  );
 }
}

export default Navbar;
