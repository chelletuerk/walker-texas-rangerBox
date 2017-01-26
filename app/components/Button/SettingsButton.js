import React from 'react';

const SettingsButton = (props) => {
  return (
    <button onClick={() => props.handleClick() } className='round-buttons'>Settings</button>
  );
}

export default SettingsButton;
