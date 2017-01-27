import React from 'react'

const JokeNumInput = ({ handleChange, numberOfWantedJokes }) => {
  return(
    <input
      value={numberOfWantedJokes}
      onChange={handleChange}
      type='number'
    >
    </input>
  )
}

export default JokeNumInput
