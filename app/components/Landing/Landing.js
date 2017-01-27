import React from 'react'
import GetJokesButton from '../Button/GetJokesButton'
import FavoritesButton from '../Button/FavoritesButton'
import JokeNumInput from '../JokeNumInput'
import Header from '../Header/Header'
import GetFavorites from '../Button/GetFavorites'

class Landing extends React.Component {
  constructor() {
    super()

  }
    this.state = {
        jokes: [],
        jokeNumInput: '',
        randoJoke: '',
        favorites: [],
        anyFavorites: false,

      }

    render() {
      return (
        <div className="landing-container">
                <h2>{this.state.randoJoke}</h2>
                <div className='button-input'>
                  <GetJokesButton fetchJokes={this.fetchJokes} />
                  <JokeNumInput handleChange={this.handleChange} />
                  <GetFavorites getFavorites={this.getFavorites} />
                </div>
                <ul>
                  {this.renderJokes()}
                </ul>
        </div>
      )
    }
}

export default Landing
