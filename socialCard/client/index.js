import React from 'react';
import ReactDOM from 'react-dom';
import SocialCard from './SocialCard.jsx';

const name = 'Zach McCain';
const title = 'Software Engineer';

const userInfo = {
  name: 'Zach McCain',
  title: 'Software Engineer',
  gitHub: 'https://github.com/zachMcCain'
}

ReactDOM.render(<SocialCard user={userInfo}/>, document.getElementById('app'));
