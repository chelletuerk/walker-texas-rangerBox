import React from 'react';

const FavoritesButton = (props) => {
  return (
    <div>
      <button
        className='favorite'
        onClick={props.favorite}
      >FAVE!
      </button>
    </div>
  )
}

export default FavoritesButton
