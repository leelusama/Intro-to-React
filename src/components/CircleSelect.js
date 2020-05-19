import React from 'react';

function CirclSelect(props) {
  console.log('Component CircleSelect');

  const handleChange = props.onChange;
  const select = (
    <select value={props.selectedCircle} onChange={handleChange}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.lable}
        </option>
      ))}
    </select>
  );

  return select;
}

export default CirclSelect;
