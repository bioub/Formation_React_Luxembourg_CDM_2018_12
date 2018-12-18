import React, { Component } from 'react'

export default function desactivable(WrappedComponent) {

  return class extends Component {
    render() {
      return (
        <div>
          <WrappedComponent />
          <button>hide</button>
        </div>
      )
    }
  }
}
