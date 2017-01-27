import React from 'react';

const ToJokesButton = (props) => {
  return (
    <button onClick={() => props.handleClick() } className='round-buttons'>Jokes</button>
  );
}

export default ToJokesButton;
