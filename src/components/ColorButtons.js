import React from 'react';
import capitalize from 'capitalize';

function ColorButtons(props) {
  console.log('Component ColorButtons');

  const handleClick = props.onClick;
  const buttons = props.buttons.map((button) => (
    <button
      type='button'
      key={button}
      name={button}
      style={{
        backgroundColor: button,
        color: button === 'white' ? 'black' : 'white',
      }}
      onClick={handleClick}
    >
      {capitalize.words(button)}
    </button>
  ));

  return buttons;
}

export default ColorButtons;
