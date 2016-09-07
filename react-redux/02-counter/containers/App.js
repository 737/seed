import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as actions from '../actions/counter'

console.log(actions);

export default connect(state => {
    return {
        counter: state.counter
    }
}, actions)(Counter)
