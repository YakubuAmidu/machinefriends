import React from 'react';

const Card = (props) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src='https://robohash.org/test?200x200' alt='machine' />
      <div>
        <h2>{props.name}</h2>
        <h2>{props.email}</h2>
      </div>
    </div>
  );
};

export default Card;
