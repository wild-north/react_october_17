import React, { Component } from 'react';

export const Chat = ({ welcomeMessage, children }) => (
  <div>
    <h4>{ welcomeMessage }</h4>
    { children }
  </div>
);

export class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle(ev) {
    const { checked: oldChecked } = this.state;
    this.setState({
      checked: !oldChecked
    });
  }

  render() {
    return (
      <div>
        <button onClick={ this.toggle }>Button</button>
        <span>{
          this.state.checked
            ? 'ON'
            : 'OFF'
        }</span>
      </div>
    );
  }
}