import React from 'react';

const JokesButton = (props) => {
  return (
    <button onClick={() => props.goToJokes()}>Jokes</button>
  );
}

export default JokesButton;
