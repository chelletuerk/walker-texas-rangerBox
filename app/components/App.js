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
    this.handleChange = this.handleChange.bind(this)
  }

  fetchJokes() {
    const { jokes } = this.state
    const url = 'http://api.icndb.com/jokes/random/'
    axios.get(`${url}${this.state.jokeNumInput}`)
      .then(response => {
        const jokes =response.data.value.map((info) => {
          console.log(info.joke)
          return info.joke
        })
        this.setState({ jokes, jokeNumInput: '' });
      })
  }

  handleChange(e) {
    let numOfJokes = e.target.value
    this.setState({jokeNumInput: numOfJokes})
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
          value={this.state.jokeNumInput}
          onChange={this.handleChange}
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
