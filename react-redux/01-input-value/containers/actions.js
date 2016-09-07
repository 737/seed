//定义一个change方法，将来把它绑定到props上
export function change(value){
    return{
        type:"CHANGE",
        value:value
    }
}

export function clear(value) {

    return {
        type: 'CLEAR',
        value: ''
    }
}