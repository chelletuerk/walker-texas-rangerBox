import React from 'react';

const SettingsButton = (props) => {
  return (
    <button onClick={() => props.handleClick() }>Settings</button>
  );
}

export default SettingsButton;
