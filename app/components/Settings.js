import React from 'react'
import SetButton from './Button/SetButton'
import ResetButton from './Button/ResetButton'
import axios from 'axios'


class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      nameJokes: [],
      randomJoke: '',
      selected: 'off',
    }
    this.fetchNameJokes = this.fetchNameJokes.bind(this)
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.clearDOM = this.clearDOM.bind(this)
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
      const { nameJokes } = this.state
        const url = 'http://api.icndb.com/jokes/random/'
        axios.get(`${url}?escape=javascript&firstName=${this.state.firstName}&lastName=${this.state.lastName}`)
        .then(response => {
          let joke = [response.data.value.joke];
          this.setState({nameJokes: joke})
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

    radioToggle(e){
       e.target.value === 'On' ?
       this.setState({selected: 'on'})
       :
       this.setState({selected: 'off'})
     };

    clearDOM() {
      this.setState({ firstName: '', lastName: '' })
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
        <ResetButton clearDOM={this.clearDOM} />
        <ul>
          {this.renderNameJokes()}
        </ul>
        <form>Parental Controls:
        <input type="radio"
              className="onRadio"
              value="On"
              onChange={(e) => this.radioToggle(e)}
              checked={this.state.selected === "on"}/> On
       <input type="radio"
              className="offRadio"
              value="Off"
              onChange={(e) => this.radioToggle(e)}
              checked={this.state.selected === "off"}/> Off
        </form>
      </div>
    )
  }
}

module.exports = Settings
