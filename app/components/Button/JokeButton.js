import React from 'react';

const JokeButton = (props) => {
  return (
    <button onClick={() => props.handleJokes()}>Get Jokes</button>
  );
}

export default JokeButton;
