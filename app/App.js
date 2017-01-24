import React from 'react';
import JokeButton from './Button/JokeButton';
// require('./styles.scss');

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      joke: '',
      jokeNumber: '',
    }
  }

  const getJokes = () => {
    console.log('bleh');
    //write fxn to hit api, then call this in componentWillMount()
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
