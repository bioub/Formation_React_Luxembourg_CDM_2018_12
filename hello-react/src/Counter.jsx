import React, { Component } from 'react'

export default class Counter extends Component {

  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.count}
      </button>
    )
  }
}

/*
export default class Counter extends Component {

  constructor() {
    super();
    this.state = {
      count: 0,
    };
    // https://reactjs.org/docs/faq-functions.html
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.count}
      </button>
    )
  }
}
*/
