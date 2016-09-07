import React, { Component } from 'react'

class Counter extends Component {
    render () {
        
        
        return (
            <p>
                Clicked: {this.props.counter} times             
                <button onClick={ e => this.eventAdd(e) } >+</button>                
                <button onClick={e=>this.eventDem(e)} >-</button>
                <button onClick={e => this.eventAddIfOdd(e)}>Increment if odd</button>
                <button>Increment async</button>
            </p>
        )
    }

    eventAdd (e) {
        this.props.increment();    
    }

    eventDem(e) {
        this.props.decrement();
    }

    eventAddIfOdd (e) {
        var counter = this.props.counter;

        if (counter % 2 === 0) {
            return;
        }

        this.props.increment();
    }
}

export default Counter