import types from '../actions/types';
const DEFAULT_STATE = {
    list: [],
    single: null
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.GET_ITEMS:
            console.log('GET ITEMS: ', action);
            return {...state, list: action.payload.data.todos };
        case types.GET_SINGLE_ITEM: 
            console.log("GET SINGLE ITEM: ", action);
            return { ...state, single: action.payload.data.todo };
        default: 
            return state;
    }
}

/*

axios.delete('http://api.reactprototypes.com/todos/[id#]?key=[your api key]');
axios.put('http://api.reactprototypes.com/todos/[id#]?key=[your api key]');


Display info, format time, toggle button for completeness and delete button , then takes you back to home page

*/
