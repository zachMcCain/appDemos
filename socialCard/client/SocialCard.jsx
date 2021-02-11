import React from 'react';

const SocialCard = ({user}) => {
  return (
    <div className='cardContainer float'>
      <div className="card">
        <a className='logo' href={user.gitHub} target="_blank"><img src="./../assets/gitHub.png" /></a>
        <div className='user'>
          <h1 className='name'>{user.name}</h1>
          <h5 className='title'>{user.title}</h5>
        </div>
      </div>
    </div>
  )
}

export default SocialCard;