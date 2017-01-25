import React from 'react';

const GetJokesButton = (props) => {
  return (
    <div>
      <button
        className='get-jokes'
        onClick={() => props.fetchJokes()}
      >New Jokes
      </button>
    </div>
  )
}

export default GetJokesButton
