import React, { Component } from 'react';
// import { Link } from 'react-router';

// require('./styles.scss');

class App extends React.Component {
  //
  // const randoJokes = () => {
  //   console.log('bleh');
  //   //write fxn to hit api, then call this in componentWillMount()
  // }

  render() {
    return (
      <div>
        <JokeButton handleJokes={() => getJokes()} />
      </div>
    )
  }
}

module.exports = App
