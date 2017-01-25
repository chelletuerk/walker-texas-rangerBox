import React from 'react';
import './header-style';
import SettingsButton from '../Button/SettingsButton';
// import JokesButton from '../Button/JokesButton'

const takeToSettings = () => {
  console.log('take to settings');
}

const takeToHome = () => {
  console.log('Take to homepage');
}

const Header = () => {
  return (
    <div className="Header">
      <h1>Chuck Norris Joke Machine</h1>
      <SettingsButton handleClick={takeToSettings} />
      {/* <JokesButton handleJokes={takeToHome} /> */}
    </div>
  );
}

export default Header;
