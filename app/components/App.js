import React, { Component } from 'react';
import GetJokesButton from './Button/GetJokesButton'
import JokeNumInput from './JokeNumInput'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      jokes: [],
      jokeNumInput: '',
      randoJoke: '',
    }

    this.fetchJokes = this.fetchJokes.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
      const { randoJoke } = this.state
      const url = 'http://api.icndb.com/jokes/random/'
      axios.get(url)
        .then(response => {
        const randoJoke = response.data.value.joke
        console.log(randoJoke);
      })
      this.setState({ randoJoke })
    }



  fetchJokes() {
    const { jokes } = this.state
    const url = 'http://api.icndb.com/jokes/random/'
    axios.get(`${url}${this.state.jokeNumInput}/?escape=javascript`)
      .then(response => {
        const jokes = response.data.value.map((info) => {
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
        <JokeNumInput handleChange={this.handleChange} />
        <h2>{this.state.randoJoke}</h2>
        <ul>
          {this.renderJokes()}
        </ul>
      </div>
    )
  }
}

module.exports = App
