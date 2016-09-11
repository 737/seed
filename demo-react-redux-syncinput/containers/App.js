import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as action from '../actions/syncValue'
import syncValue from '../components/syncValue'

//将state.txt绑定到props的txt
function mapStateToProps(state) {
  return {
    txt: state.value
  }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch)
}

//将state的指定值映射在props上，将action的所有方法映射在props上
export default connect(mapStateToProps, mapDispatchToProps)(syncValue);

