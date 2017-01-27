import React from 'react'

class Favorites extends React.Component {
  constructor() {
    super()
    this.state = {
      favorites: [],
      anyFavorites: false,
    }
  }
  componentDidMount() {
    this.getFavorites()
  }

  getFavorites() {
    const favorites = localStorage.favorites;
    if (!favorites) return this.setState({ anyFavorites: false });
    return this.setState({ favorites: JSON.parse(favorites), anyFavorites: true });
  }

  loadFavorites() {
    return this.state.favorites.map((favorite, i) => {
      return (
        <li key={i}>{favorite}</li>
      )
    })
  }

  render() {
    if (this.state.anyFavorites) {
      return <div>{this.loadFavorites()}</div>
    } else {
      return <li>NO FAVORITES HAHA</li>
    }
  }
}

export default Favorites
