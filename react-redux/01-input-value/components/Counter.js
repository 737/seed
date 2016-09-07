import React from 'react'
import { Component } from 'react';
import { Provider } from 'react-redux';




export default class App extends Component {
  render() {
    return (
        <button onClick={this.props.onIncrement}>
          {this.props.value}
        </button>
        
    )
  }
}