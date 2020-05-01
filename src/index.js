import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeContextProvider from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';

ReactDOM.render(
 <ThemeContextProvider>
  {' '}
  <AuthContextProvider>
   <App />{' '}
  </AuthContextProvider>
 </ThemeContextProvider>,
 document.getElementById('root')
);
