import React from 'react';

const SettingsButton = (props) => {
  return (
    <button className='settings-btn' onClick={() => props.handleClick() }>Settings</button>
  );
}

export default SettingsButton;
