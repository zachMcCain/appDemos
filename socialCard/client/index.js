import React from 'react';
import ReactDOM from 'react-dom';
import SocialCard from './SocialCard.jsx';

const userInfo = {
  name: 'Zach McCain',
  title: 'Software Engineer',
  gitHub: 'https://github.com/zachMcCain'
}

ReactDOM.render(<SocialCard user={userInfo}/>, document.getElementById('app'));
