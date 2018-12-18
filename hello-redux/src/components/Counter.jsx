import React, { Component } from 'react'
import PropTypes from 'prop-types';

/*
export default class Counter extends Component {

  static propTypes = {
    count: PropTypes.number,
  }

  handleClick = () => {
    this.props.dispatch({ type: 'INCREMENT_COUNTER' });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.count}
      </button>
    )
  }
}
*/
export default ({count, handleClick}) => (
  <button onClick={handleClick}>
    {count}
  </button>
);
