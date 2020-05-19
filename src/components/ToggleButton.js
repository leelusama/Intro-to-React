import React from 'react';
import classNames from 'classnames';
import './ToggleButton.css';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(({ isOn }) => ({ isOn: !isOn }));
  }

  render() {
    const { isOn } = this.state;

    const text = isOn ? 'On' : 'Off';

    const className = classNames({
      'toggle-button': true,
      'toggle-button--on': isOn,
      'toggle-button--off': !isOn,
    });

    return (
      <button className={className} onClick={this.handleClick}>
        {text}
      </button>
    );
  }
}

export default ToggleButton;
