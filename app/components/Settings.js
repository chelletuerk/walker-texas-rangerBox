import React from 'react'
import SetButton from './Button/SetButton'
import axios from 'axios'


class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      nameJokes: [],
      randomJoke: '',
    }
    this.fetchNameJokes = this.fetchNameJokes.bind(this)
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
  }

  componentDidMount() {
      const { randomJoke } = this.state
      const url = 'http://api.icndb.com/jokes/random/?escape=javascript'
      axios.get(url)
        .then(response => {
          console.log(response);
        const randomJoke = response.data.value.joke
        this.setState({ randomJoke })
      })
    }

    fetchNameJokes() {
      const { nameJokes } = this.state
        const url = 'http://api.icndb.com/jokes/random/'
        axios.get(`${url}?&firstName=${this.state.firstName}&lastName=${this.state.lastName}`)
        .then(response => {
            debugger
          const nameJokes = response.data.value.map((info) => {
            return info.joke
          })
          this.setState({ nameJokes, firstName: '', lastName: '' });
        })
    }

    handleFirstName(e) {
      let firstName = e.target.value
      this.setState({ firstName })
    }

    handleLastName(e) {
      let lastName = e.target.value
      this.setState({ lastName })
    }

    renderNameJokes() {
      return this.state.nameJokes.map((joke, i) => {
        return (
          <li key={i}>{joke}</li>
        )
      })
    }

  render() {
    return(
      <div>
        <h2>{this.state.randomJoke}</h2>
        <input
          className='first'
          onChange={this.handleFirstName}
          value={this.state.firstName}
          type='text'>
        </input>
        <input
          className='last'
          onChange={this.handleLastName}
          value={this.state.lastName}
          type='text'>
        </input>
        <SetButton fetchNameJokes={this.fetchNameJokes} />
        <ul>
          {this.renderNameJokes()}
        </ul>
      </div>
    )
  }
}

module.exports = Settings
