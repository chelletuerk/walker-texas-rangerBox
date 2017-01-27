import React, { Component } from 'react';
import GetJokesButton from './Button/GetJokesButton'
import FavoritesButton from './Button/FavoritesButton'
import GetFavorites from './Button/GetFavorites'
import JokeNumInput from './JokeNumInput'
import Header from './Header/Header'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      jokes: [],
      jokeNumInput: '',
      randoJoke: '',
      favorites: [],
      anyFavorites: false,
    }

    this.fetchJokes = this.fetchJokes.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.favorite = this.favorite.bind(this)
  }

  componentDidMount() {
      const { randoJoke } = this.state
      const url = 'http://api.icndb.com/jokes/random/?escape=javascript'
      axios.get(url)
        .then(response => {
        const randoJoke = response.data.value.joke
        this.setState({ randoJoke })
      })
      this.checkLocal()
      this.getFavorites()
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

  favorite(e) {
    const joke = e.target.parentElement.parentElement.innerText
    const favorites = [...this.state.favorites, joke]
    this.setState({ favorites }, () => {
      localStorage.favorites = JSON.stringify(favorites)
    })
  }

  getFavorites() {
    const favorites = localStorage.favorites;
    if (!favorites) return this.setState({ anyFavorites: false });
    return this.setState({ favorites: JSON.parse(favorites), anyFavorites: true });
  }

  checkLocal() {
    const favorites = localStorage.favorites;
    if (!favorites) {
      localStorage.favorites = "[]";
      this.setState({ favorites: JSON.parse(localStorage.favorites) });
    } else {
      this.setState({ favorites: JSON.parse(localStorage.favorites) });
    }
  }

  handleChange(e) {
    let numOfJokes = e.target.value
    this.setState({jokeNumInput: numOfJokes})
  }

  renderJokes() {
    return this.state.jokes.map((joke, i) => {
      return (
        <li key={i}>{joke}
          <FavoritesButton favorite={this.favorite} />
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <h2>{this.state.randoJoke}</h2>
        <div className='button-input'>
          <GetJokesButton fetchJokes={this.fetchJokes} />
          <JokeNumInput handleChange={this.handleChange} />
        </div>
        <div className='fave-div'>
          <GetFavorites favorite={this.favorite} />
        </div>
        <ul>
          {this.renderJokes()}
        </ul>
      </div>
    )
  }
}

module.exports = App
