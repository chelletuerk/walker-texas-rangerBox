import React from 'react'
import { render } from 'react-dom'
import './styles'
import Header from './components/Header/Header'
// import App from '../App'

const Application = () => {
  return (
    <div>
      <Header />
      <div className='rando-joke'>Rando Joke</div>
      {/* <JokeButton /> */}
    </div>
  )
}

render(<Application />, document.querySelector('.application'));
