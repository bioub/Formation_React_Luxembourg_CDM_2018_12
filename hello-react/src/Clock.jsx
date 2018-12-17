import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    
    this.state = {
      now: new Date(),
      format: 'HH:mm:ss',
    };
  }

  componentDidMount() {
    this._interval = setInterval(() => {
      this.setState({ // merge shallow (1er niveau)
        now: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    return (
      <div>{this.state.now.toLocaleTimeString()}</div>
    );
  }
}

export default Clock;