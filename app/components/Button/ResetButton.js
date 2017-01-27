import React from 'react';

const ResetButton = (props) => {
  return (
    <div>
      <button
        className='get-jokes  set-btn'
        onClick={() => props.clearDOM()}
      >Reset
      </button>
    </div>
  )
}

export default ResetButton
