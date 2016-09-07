//reducer就是个function,名字随便你起，功能就是在action触发后，返回一个新的state(就是个对象)
// export default function change(state,action){
//   if(action.type=="change")return{value:action.value};
//   return {value:'default'};
// }




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