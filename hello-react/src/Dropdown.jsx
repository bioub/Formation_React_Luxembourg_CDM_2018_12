import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './Dropdown.module.css'

export default class Dropdown extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.string,
    onSelected: PropTypes.func,
  }

  state = {
    open: false,
  }

  handleClickSelected = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  handleClickItem = (item) => {
    this.props.onSelected(item);
    this.setState({
      open: false,
    });
  }

  render() {

    const items = this.props.items.map((item, i) => <div key={i} onClick={() => this.handleClickItem(item)}>{item}</div>);

    return (
      <div className={css.Dropdown}>
        <div className={css.DropdownSelected} onClick={this.handleClickSelected}>{this.props.selected}</div>
        {this.state.open && <div className={css.DropdownItems}>{items}</div>}
      </div>
    )
  }
}
