import React, { Component } from 'react';
import JokeButton from '../components/Button/JokeButton'
import randoJoke from './randoJoke'

class App extends React.Component {
constructor() {
  super()
}

getJokes() {
  console.log('jokes, biatch!');
}

  render() {
    return (
      <div>
        <JokeButton handleJokes={() => getJokes()} />
      </div>
    )
  }
}

module.exports = App
