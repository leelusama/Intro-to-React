import React from 'react';

function Center(props) {
  console.log('Component Center');

  const { centerColor } = props;
  return (
    <div
      className='circle center'
      style={{ backgroundColor: centerColor }}
    ></div>
  );
}

export default Center;
