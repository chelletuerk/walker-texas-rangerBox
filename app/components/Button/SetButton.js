import React from 'react';

const SetButton = (props) => {
  return (
    <div>
      <button
        className='get-jokes'
        onClick={() => props.fetchNameJokes()}
      >Set
      </button>
    </div>
  )
}

export default SetButton
