import React, { Component } from 'react'

export default class ContactForm extends Component {

  state = {
    prenom: 'Romain',
    nom: 'Bohdanowicz',
  };

  handleSubmit = (event) => {
    event.preventDefault();

  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Prénom : <input type="text" name="prenom" value={this.state.prenom} onChange={this.handleChange} />
        </div>
        <div>
          Nom : <input type="text" name="nom" value={this.state.nom} onChange={this.handleChange} />
        </div>
        <div>
          <button>Go</button>
        </div>
      </form>
    )
  }
}
