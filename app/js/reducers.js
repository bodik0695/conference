// import addTodo from './actions';

const initialState = {
    todos: [],
    response: ''
}

export default function todoApp(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    response: action.response
                }
            ]
        case 'GET_TASKS':
        // return Object.assign({}, state, action)
            return [
                ...state,
                {
                    todos: action.todos
                }
                
            ]
        default:
            return state
    }
}