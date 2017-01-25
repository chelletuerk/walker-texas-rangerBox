import React from 'react';
import Button from '../components/Button/JokeButton';

export const RandoJoke = () => {
  console.log('joke!');
  return (
    <div>
      <h1>Joke</h1>
      <JokeButton handleJokes={() => getJokes()} />
    </div>
  )
}
