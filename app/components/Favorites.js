import React from 'react'

class Favorites extend React.Component {
  constructor() {
    super()

      render() {
      if (this.state.anyFavorites) {
        return <div>{loadFavorites()}</div>
      } else {
        return <h1>NO FAVORITES HAHA</h1>
      }
    }
  }
}

export default FavoritesButton
