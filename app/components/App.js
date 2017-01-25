import React, { Component } from 'react';
import GetJokesButton from './Button/GetJokesButton'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      jokes: [],
      jokeNumInput: '',
    }
    this.fetchJokes = this.fetchJokes.bind(this)
  }

  fetchJokes() {
    const { jokes } = this.state
    const url = 'http://api.icndb.com/jokes/random/3'
    axios.get(url)
      .then(response => {
        const jokes =response.data.value.map((info) => {
          console.log(info.joke)
          return info.joke
        })
        this.setState({ jokes, jokeNumInput: '' });
      })
  }

  handleChange(e) {
    this.setState({jokeNumInput: e.target.value})
  }




  // sanitizeJokes(jokes) {
  //   return jokes.map(data => {
  //     const sanitizeJoke = data.joke.replace(/&quot;/gi, '');
  //     return sanitizeJoke;
  //   })
  // }
  //
  renderJokes() {
    return this.state.jokes.map((joke, i) => {
      return (
        <li key={i}>{joke}</li>
      )
    })
  }


  render() {
    return (
      <div>
        <GetJokesButton fetchJokes={this.fetchJokes} />
        <input
          onChange={this.state.handleChange}
          type='number'>
        </input>
        <ul>
          {this.renderJokes()}
        </ul>
      </div>
    )
  }
}

module.exports = App
