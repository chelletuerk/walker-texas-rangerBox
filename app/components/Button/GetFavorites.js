import React from 'react';

const GetFavorites = (props) => {
  return (
    <div>
      <button
        className='get-favorites'
        onClick={props.getFavorites}
      >Favorites
      </button>
    </div>
  )
}

export default GetFavorites
