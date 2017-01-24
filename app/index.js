import React from 'react'
import { render } from 'react-dom'
import './styles'
import Header from './components/Header/Header'

const App = () => {
  return (
    <div>
      <Header />
      <div className='rando-joke'>Rando Joke</div>
    </div>
  )
}

render(<App />, document.querySelector('.application'));
