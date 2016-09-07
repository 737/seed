
export function increment() {

    return {
        type:'INCREAMENT'        
    }
}

export function decrement() {
    return {
        type: 'DECREMENT'
    }
}

// export function incrementIfOdd() {
//     return (dispatch, getState) => {
//         let state = getState();

//         if (state.counter % 2 === 0) {
//             return;
//         }

//         dispatch(increment())
//     }    

// }