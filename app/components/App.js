import React, { Component } from 'react';
import GetJokesButton from './Button/GetJokesButton'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      jokes: [],
    }
    this.fetchJokes = this.fetchJokes.bind(this)
  }

  fetchJokes() {
    const { jokes } = this.state
    const url = 'http://api.icndb.com/jokes'
    axios.get(url)
      .then(response => {
        this.setState({jokes: response.data.value});
      })
  }

  sanitizeJokes(jokes) {
    return jokes.map(data => {
      const sanitizeJoke = data.joke.replace(/&quot;/gi, '');
      return sanitizeJoke;
    })
  }

  renderJokes() {
    return this.sanitizeJokes(this.state.jokes.slice(0, 5)).map((e, i) => {
      return (
        <li key={i}>{e}</li>
      )
    })
  }


  render() {
    return (
      <div>
        <GetJokesButton fetchJokes={this.fetchJokes} />
        <ul>
          {this.renderJokes()}
        </ul>
      </div>
    )
  }
}

module.exports = App
