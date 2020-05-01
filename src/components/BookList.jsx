import React, {Component} from 'react';
import styled from 'styled-components';
import {ThemeContext} from '../context/ThemeContext';

const StyledDiv = styled.div`
 background: ${({theme}) => theme.bg};
 color: ${({theme}) => theme.syntax};
 & li {
  background: ${({theme}) => theme.ui};
  padding: 5px 0;
 }
`;
class BookList extends Component {
 static contextType = ThemeContext;
 render() {
  const {isLightTheme, light, dark} = this.context;
  const theme = isLightTheme ? light : dark;
  return (
   <StyledDiv className='book-list' theme={theme}>
    <ul>
     <li>book1</li>
     <li>book1</li>
     <li>book1</li>
    </ul>
   </StyledDiv>
  );
 }
}

export default BookList;
