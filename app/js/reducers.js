// import addTodo from './actions';

const initialState = {
    todos: []
}

export default function todoApp(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    title: action.title,
                    text: action.text,
                    status:  action.status
                }
            ]
        case 'GET_TODOS':
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