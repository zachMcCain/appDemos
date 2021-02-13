import React from 'react';

const SocialCard = ({user}) => {
  return (
    <div className='cardContainer float'>
      <div className="card">
        <a className='logo' >
          <img className='pic' src="./../assets/IMG_9001.jpg" />
        </a>
        <div className='user'>
          <h1 className='name'>{user.name}</h1>
          <h5 className='title'>{user.title}</h5>
        </div>
        <div className='info'>
          <p>I am writing some information that is intended to go in the bottom right-hand corner of the card.</p>
        </div>
        <div className='links'>
          <img href={user.gitHub} target="_blank" src="./../assets/gitHub.png"></img>
        </div>
      </div>
    </div>
  )
}

export default SocialCard;