import React, { Component } from 'react';
import CounterConnected from '../containers/CounterConnected';
import Counter from './Counter';
import HelloColor from '../containers/HelloColor';
import DropdownColor from '../containers/DropdownColor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterConnected />
        <CounterConnected />
        <CounterConnected />
        <CounterConnected />
        <CounterConnected />
        <Counter count={10} />
        <HelloColor />
        <DropdownColor items={['Rouge', 'Vert', 'Bleu']} />
      </div>
    );
  }
}

export default App;
