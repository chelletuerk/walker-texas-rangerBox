import React from 'react'
import axios from 'axios'


class Settings extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
    }
  }

    componentDidMount(props) {
        const { randoJoke } = this.props
        const url = 'http://api.icndb.com/jokes/random/?escape=javascript'
        axios.get(url)
          .then(response => {
          const randoJoke = response.data.value.joke
          this.setState({ randoJoke })
      })
    }
  
  render() {
    return(
      <div>
        {/* <input onChange={this.handleF}>

        </input> */}
      </div>
    )
  }
}

module.exports = Settings
