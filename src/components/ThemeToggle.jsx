import React, {Component} from 'react';
import {ThemeContext} from '../context/ThemeContext';
class ThemeToggle extends Component {
 static contextType = ThemeContext;
 render() {
  const {toggleTheme} = this.context;
  return (
   <div>
    <button onClick={toggleTheme}>Change the Theme</button>
   </div>
  );
 }
}

export default ThemeToggle;
