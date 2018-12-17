import React, { Component } from 'react';
import Hello from './Hello';
import Clock from './Clock';
import Counter from './Counter';
import ContactForm from './ContactForm';
import Dropdown from './Dropdown';

class App extends Component {

  state = {
    selected: 'Romain',
  }

  handleSelected = (selected) => {
    this.setState({
      selected, // selected: selected // ES6 shortand property
    })
  }

  render() {
    return (
      <div className="App">
        <Hello name="Romain" />
        <Clock />
        <Counter />
        <ContactForm />
        <Dropdown items={['Romain', 'Jean', 'Paul']} selected={this.state.selected} onSelected={this.handleSelected} />
        <Hello name={this.state.selected} />
      </div>
    );
  }
}

export default App;
