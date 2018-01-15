// import addTodo from './actions';
import { createReducer } from 'redux-create-reducer';
import ActionTypes from '../actionTypes';

// var handlers = {
//     todos: [],
//     add: add,
//     multiply: multiply,
//     // compose handler functions together for compound actions. 
//     addThenMultiply: createReducer.compose(add, multiply)
//   }

const initialState = {
    todos: []
}

function findPosition(arr, id) {
    let position;
    arr.forEach((item, key) => {
        if (item._id === id) {
            position = key;
        }
    });
    return position;
}

export const todoListReducer = createReducer(initialState, {
    [ActionTypes.GET_TASKS] (state, action) {
        return {
            ...state,
            todos: [
                ...action.todos
            ]
        }
    },
    [ActionTypes.ADD_TASK] (state, action) {
        return {
            ...state,
            todos: [
                ...state.todos,
                ...action.newTask
            ]
        }
    },
    [ActionTypes.UPDATE_TASK || ActionTypes.UPDATE_STATUS] (state, action) {
        const updatedTaskPosition = findPosition(state.todos, action.id);
        return {
            ...state,
            todos: [
                ...state.todos.slice(0, updatedTaskPosition),
                action.changedTask,
                ...state.todos.slice(updatedTaskPosition+1)
            ]
        }
    },
    [ActionTypes.DELETE_TASK] (state, action) {
        const delTaskPosition = findPosition(state.todos, action.id);
        return {
            ...state,
            todos: [
                ...state.todos.slice(0, delTaskPosition),
                ...state.todos.slice(delTaskPosition+1)
            ]
        }
    }
});

export default todoListReducer;