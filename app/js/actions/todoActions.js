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
// export const getTask = (id) => ({
//     [RSAA]: {
//       endpoint: `/todos/${id}`,
//       method: 'GET',
//       types: [
//             'REQUEST',
//             {
//                 type: ActionTypes.GET_TASK,

//             },
//             'FAILURE'
//       ]
//     }
// });

export const addTask = (newTitle, newText, newStatus) => {
    const newTask = {
        title: newTitle,
        text: newText,
        status: newStatus
    }
    
    return dispatch =>  axios.post('/todos', newTask)
        .then(response => dispatch({
            type: ActionTypes.ADD_TASK,
            newTask: response.data
        }))
};

export const updateStatus = (id, newStatus) => {
    const changedTask  = {
        status: newStatus
    }
    return (dispatch, getState) => axios.put(`/todos/${id}`, changedTask)
        .then(response => {
            const state = getState();
            const taskPosition = findPosition(state.todoList.todos, response.data._id);
            
            return dispatch({
                type: ActionTypes.UPDATE_STATUS,
                changedTask: response.data,
                taskPosition
            })
        })
}

export const updateTask = (id, { title, text }) => {
    const changedTask  = {
        title,
        text
    }

    return (dispatch, getState) => axios.put(`/todos/${id}`, changedTask)
        .then(response => {
            const { todos } = getState().todoList;
            const taskPosition = findPosition(todos, response.data._id);

            return dispatch({
                type: ActionTypes.UPDATE_TASK,
                taskPosition,
                changedTask: response.data
            });
        });
}


export const delTask = id => (dispatch, getState) => axios.delete(`/todos/${id}`)
    .then(response => {
        const state = getState();
        const taskPosition = findPosition(state.todoList.todos, id);
        return dispatch({
            type: ActionTypes.DELETE_TASK,
            taskPosition
        })
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

export const findPosition = (arr, id) => {
    let position = -1;
    arr.forEach((item, key) => {
        if (item._id === id) {
            position = key;
        }
    });
    return position;
}