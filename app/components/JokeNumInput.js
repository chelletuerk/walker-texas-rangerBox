import React from 'react'

export default class JokeNumInput extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { handleChange, jokeNumInput } = this.props
    return(
      <input
        value={jokeNumInput}
        onChange={handleChange}
        type='number'>
      </input>
    )
  }
}
