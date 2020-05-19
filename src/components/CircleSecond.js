import React from 'react';
import CircleFirst from './CircleFirst';

function CircleSecond(props) {
  console.log('Component CircleSecond');

  const { circleSecondColor } = props;
  return (
    <div
      className='circle circle-second'
      style={{ backgroundColor: circleSecondColor }}
    >
      <CircleFirst {...props} />
    </div>
  );
}

export default CircleSecond;
