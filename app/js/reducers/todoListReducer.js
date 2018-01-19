import { createReducer } from 'redux-create-reducer';

import ActionTypes from '../actions/actionTypes';
import findPosition from '../utils/findPosition';


const initialState = {
    todos: []
}

export const todoListReducer = createReducer(initialState, {
    [ActionTypes.GET_TASKS] (state, action) {
        return {
            ...state,
            todos: action.payload
        }
    },
    [ActionTypes.ADD_TASK] (state, action) {
        return {
            ...state,
            todos: [
                ...state.todos,
                ...action.payload
            ]
        }
    },
    [ActionTypes.UPDATE_STATUS] (state, action) {
        const taskPosition = findPosition(state.todos, action.payload._id);
        return {
            ...state,
            todos: [
                ...state.todos.slice(0, taskPosition),
                action.payload,
                ...state.todos.slice(taskPosition+1)
            ]
        }
    },
    [ActionTypes.UPDATE_TASK] (state, action) {
        const taskPosition = findPosition(state.todos, action.payload._id);
        return {
            ...state,
            todos: [
                ...state.todos.slice(0, taskPosition),
                action.payload,
                ...state.todos.slice(taskPosition+1)
            ]
        }
    },
    [ActionTypes.DELETE_TASK] (state, action) {
        const taskPosition = findPosition(state.todos, action.payload.id);
        return {
            ...state,
            todos: [
                ...state.todos.slice(0, taskPosition),
                ...state.todos.slice(taskPosition+1)
            ]
        }
    }
});

export default todoListReducer;