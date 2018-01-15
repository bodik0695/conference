// import sendRequest from './request';
import axios from 'axios';

import ActionTypes from './actionTypes';

const addTask = (newTitle, newText, newStatus) => {
    const newTask = {
        title: newTitle,
        text: newText,
        status: newStatus
    }
    return dispatch =>  axios.post('/todos', newTask)
        .then(response => dispatch(appendTask(response.data)))
}
const appendTask = (newTask) => ({
    type: ActionTypes.ADD_TASK,
    newTask
})

const delTask = (id) => dispatch => axios.delete(`/todos/${id}`)
    .then(response => dispatch(deletedTask(id)));

const deletedTask = (id) => ({
    type: ActionTypes.DELETE_TASK,
    id
})

const updateStatus = (id, newStatus) => {
    const changedTask  = {
        _id: id,
        status: newStatus
    }
    return dispatch => axios.put('/todos', changedTask)
        .then(response => dispatch(changeStatus(response.data)));
}
const changeStatus = (changedTask) => ({
    type: ActionTypes.UPDATE_STATUS,
    id: changedTask._id,
    changedTask
})

const updateTask = (id, newTitle, newText) => {
    const changedTask  = {
        _id: id,
        title: newTitle,
        text: newText
    }
    return dispatch => axios.put('/todos', changedTask)
        .then(response => dispatch(changeTask(response.data)));
}
const changeTask = (changedTask) => ({
    type: ActionTypes.UPDATE_TASK,
    id: changedTask._id,
    changedTask
})

const getTasks = () => dispatch => axios.get('/todos')
    .then(response => dispatch(receiveTasks(response.data)));

const receiveTasks = (todos) =>({
    type: ActionTypes.GET_TASKS,
    todos
});

// const changeTask = () => ({
//     type: CHANGE_TASK,

// });
export default {addTask, getTasks, delTask, updateStatus, updateTask}