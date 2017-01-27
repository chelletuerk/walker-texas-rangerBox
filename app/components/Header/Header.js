import React from 'react'
import './header-style'
import ToJokesButton from '../Button/ToJokesButton'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router'

const takeToSettings = () => {
  console.log('take to settings')
}

const takeToHome = () => {
  console.log('Take to homepage')
}

const Header = ({children}) => {
  return (
    <div className="Header">
      <h1>Chuck Norris Joke Machine
        <Link to="/jokes"><ToJokesButton handleClick={takeToSettings} /></Link>
      </h1>
      {children}
    </div>
  )
}

export default Header;
