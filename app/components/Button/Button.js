import React from 'react';

const Button = (props) => {
  return (
    <button onClick={() => props.handleClick() }>Settings</button>
  );
}

export default Button;
