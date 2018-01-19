import axios from 'axios';
import ActionTypes from './actionTypes';
import { bindActionCreators } from 'redux';
import { RSAA } from 'redux-api-middleware';

export const getTasks = () => ({
    [RSAA]: {
        endpoint: '/todos',
        method: 'GET',
        types: [
            'REQUEST',
            ActionTypes.GET_TASKS,
            'FAILURE'
        ]
    }
});

export const getTask = (id) => ({
    [RSAA]: {
        endpoint: `/todos/${id}`,
        method: 'GET',
        types: [
            'REQUEST',
            ActionTypes.GET_TASK,
            'FAILURE'
        ]
    }
});

export const addTask = (form) => ({
    [RSAA]: {
        endpoint: '/todos',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form),
        types: [
            'REQUEST',
            ActionTypes.ADD_TASK,
            'FAILURE'
        ]
    }
});

export const updateStatus = ({id, status}) => ({
    [RSAA]: {
        endpoint: `/todos/${id}`,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            status
        }),
        types: [
            'REQUEST',
            ActionTypes.UPDATE_STATUS,
            'FAILURE'
        ]
    }
});

export const updateTask = (id, { title, text }) => ({
    [RSAA]: {
        endpoint: `/todos/${id}`,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            text
        }),
        types: [
            'REQUEST',
            ActionTypes.UPDATE_TASK,
            'FAILURE'
        ]
    }
});

export const delTask = (id) => ({
    [RSAA]: {
        endpoint: `/todos/${id}`,
        method: 'DELETE',
        types: [
            'REQUEST',
            ActionTypes.DELETE_TASK,
            'FAILURE'
        ]
    }
});

export const findTask = id => (dispatch, getState) => {
    const state = getState();
    const task = state.todoList.todos.find(todo => todo._id === id);
    const { todos } = state.todoList;
    return dispatch({ 
        type: ActionTypes.FIND_TASK,
        task
    })
}