

/** Action Creators */
function inc() {
  return { type: 'INCREMENT' };
}
function dec() {
  return { type: 'DECREMENT' };
}

function reducer(state, action) {

  // 首次调用本函数时设置初始 state
  state = state || { counter: 0 };

  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'DECREMENT':
      return { counter: state.counter - 1 };
    default:
      return state; // 无论如何都返回一个 state
  }
}

let reducerName = (state, action) => {
  
  state = state || {
    first: '',
    last: ''
  };

  switch (action.type) {
    case "FULLNAME":
      return {
        first: 'li',
        last: 'arleight'
      };
    case 'FIRSTNAME':
      return {
        first: 'li'
      };
    case 'LASTNAME':
      return {
        last: 'arleight'
      };
    default: {
      return state;
    }
  }

};

var reducers = Redux.combineReducers({ reducer, reducerName });

var store = Redux.createStore(reducers);


store.subscribe(() => console.log(store.getState()));


window.rx = Redux;



store.dispatch({
  type: 'FULLNAME'
});
// console.log( store.getState() ); // { counter: 1 }


// store.dispatch(inc());
// console.log( store.getState() ); // { counter: 2 }

// store.dispatch(dec());
// console.log( store.getState() ); // { counter: 1 }