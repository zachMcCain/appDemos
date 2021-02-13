import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';

const website = {
  title: 'JoeCool.me'
}


ReactDOM.render(<Navbar site={website}/>, document.getElementById('app'));