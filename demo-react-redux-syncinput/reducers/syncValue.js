
export default function (state = { value: 'default value' }, action) {

    switch (action.type) {
        case 'CHANGE': 
          return {
            value: action.value
          }
        case 'CLEAR':
          return {
            value: ''
          }
        default:
          return state;
    }
}