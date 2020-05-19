import React from 'react';
import Center from './Center';

function CircleFirst(props) {
  console.log('Component CircleFirst');

  const { circleFirstColor } = props;
  return (
    <div
      className='circle circle-first'
      style={{ backgroundColor: circleFirstColor }}
    >
      <Center {...props} />
    </div>
  );
}

export default CircleFirst;
