import React from 'react';
import './header-style';
import SettingsButton from '../Button/SettingsButton';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router';

// import JokesButton from '../Button/JokesButton'

const takeToSettings = () => {
  console.log('take to settings');
}

const takeToHome = () => {
  console.log('Take to homepage');
}

const Header = ({children}) => {
  return (
    <div className="Header">
      <h1>Chuck Norris Joke Machine
        <Link to="/jokes"><SettingsButton handleClick={takeToSettings} /></Link>
      </h1>
      {children}
      {/* <JokesButton handleJokes={takeToHome} /> */}
    </div>
  );
}

export default Header;
