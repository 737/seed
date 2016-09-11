
var nodeBtn = document.getElementById('js_show');
var nodeTxt = document.getElementById('js_text');


var actionShowHello = function () {
    return {
        type: 'SHOW'
    }

};

var reducer = function (state, action) {
    state = state || {};

    switch (action.type) {
        case 'SHOW':
            return {
                text: 'Hello World'
            };
        default: 
            return state
    }
};

var store = Redux.createStore(reducer);

store.subscribe(function () {
    nodeTxt.innerText = store.getState().text;
});

nodeBtn.addEventListener('click', e => {
    store.dispatch(actionShowHello());
});
