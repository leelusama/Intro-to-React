import React from 'react';
import CircleSecond from './CircleSecond';

function CircleThird(props) {
  console.log('Component CircleThird');

  const { circleThirdColor } = props;
  return (
    <div
      className='circle circle-third'
      style={{ backgroundColor: circleThirdColor }}
    >
      <CircleSecond {...props} />
    </div>
  );
}

export default CircleThird;
