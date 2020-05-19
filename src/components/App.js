import React from 'react';
import CircleThird from './CircleThird';
import ColorButtons from './ColorButtons';
import CircleSelect from './CircleSelect';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      circleThirdColor: 'black',
      circleSecondColor: 'red',
      circleFirstColor: 'blue',
      centerColor: 'white',
      selectedCircle: 'centerColor',
      buttons: ['black', 'red', 'blue', 'white'],
      options: [
        {
          value: 'centerColor',
          lable: 'Center',
        },
        {
          value: 'circleFirstColor',
          lable: 'First',
        },
        {
          value: 'circleSecondColor',
          lable: 'Second',
        },
        {
          value: 'circleThirdColor',
          lable: 'Third',
        },
      ],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    const { name } = e.target;
    console.log('Clicked color:', name);
    this.setState({
      [this.state.selectedCircle]: name,
    });
  }

  handleChange(e) {
    const { value } = e.target;
    console.log('Selected circle:', value);
    this.setState({
      selectedCircle: value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Intro to React</h1>
        <h2>Top-Down</h2>
        <h3>Open debugging console in web-browser</h3>
        <CircleThird {...this.state} />
        <section>
          <fieldset>
            <legend>Circle Color Picker</legend>
            <CircleSelect
              selectedCircle={this.state.selectedCircle}
              options={this.state.options}
              onChange={this.handleChange}
            />
            <ColorButtons
              buttons={this.state.buttons}
              onClick={this.handleClick}
            />
          </fieldset>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
