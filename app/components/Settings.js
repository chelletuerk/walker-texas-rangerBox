import React from 'react'
import SetButton from './Button/SetButton'
import axios from 'axios'


class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      jokes: [],
      randomJoke: '',
    }
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
  }

  componentDidMount() {
      const { randomJoke } = this.state
      const url = 'http://api.icndb.com/jokes/random/?escape=javascript'
      axios.get(url)
        .then(response => {
        const randomJoke = response.data.value.joke
        this.setState({ randomJoke })
      })
    }

    fetchNameJokes() {
      const { jokes } = this.state
        const url = 'http://api.icndb.com/jokes/random?'
        axios.get(`${url}&firstName=${this.state.firstName}&lastName=${this.state.lastName}`)
        .then(response => {
          const jokes = response.data.value.map((info) => {
            console.log(info.joke);
            return info.joke
          })
          this.setState({ jokes, numberOfWantedJokes: '' });
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
      </div>
    )
  }
}

module.exports = Settings
