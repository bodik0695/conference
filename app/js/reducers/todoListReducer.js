import { createReducer } from 'redux-create-reducer';
import ActionTypes from '../actions/actionTypes';


const initialState = {
    todos: []
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
    [ActionTypes.UPDATE_TASK] (state, action) {
        return {
            ...state,
            todos: [
                ...state.todos.slice(0, action.taskPosition),
                action.changedTask,
                ...state.todos.slice(action.taskPosition+1)
            ]
        }
    },
    [ActionTypes.UPDATE_STATUS] (state, action) {
        return {
            ...state,
            todos: [
                ...state.todos.slice(0, action.taskPosition),
                action.changedTask,
                ...state.todos.slice(action.taskPosition+1)
            ]
        }
    },
    [ActionTypes.DELETE_TASK] (state, action) {
        return {
            ...state,
            todos: [
                ...state.todos.slice(0, action.taskPosition),
                ...state.todos.slice(action.taskPosition+1)
            ]
        }
    }
});

export default todoListReducer;