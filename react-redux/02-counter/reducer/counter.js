
export default function (state, action) {
    state = state || { counter: 0 };

    switch (action.type) {
        case 'INCREAMENT':
            return {
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            }
        default:
            return state;
    }
}