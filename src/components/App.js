import React from 'react';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <React.Fragment>
      <h1>Intro to React</h1>
      <fieldset>
        <legend>Taggle Button Example</legend>
        <ToggleButton />
        <ToggleButton />
        <ToggleButton />
      </fieldset>
    </React.Fragment>
  );
}

export default App;
