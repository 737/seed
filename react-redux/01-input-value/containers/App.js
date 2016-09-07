import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as action from './actions'

class App extends Component {
  render() {
    return (
      <div>
        <input type='text' value={this.props.txt} onChange={ e => this.changeHandle(e) } ref="input"/>
        <button onClick={ e => this.clear(e) } >清空</button>
        {this.props.txt}
      </div>
    );
  }
  changeHandle(){
    const node = ReactDOM.findDOMNode(this.refs.input);
    const value = node.value.trim();
    this.props.change(value);
  }

  clear() {
      this.props.clear();
  }
}

//将state的指定值映射在props上，将action的所有方法映射在props上
export default connect( state => ({ 
    txt: state.value 
}), action)(App);

