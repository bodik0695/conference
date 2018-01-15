import axios from 'axios';
import ActionTypes from './actionTypes';
import store from '../store';

const getTasks = () => dispatch => axios.get('/todos')
    .then(response => dispatch(receiveTasks(response.data)));
const receiveTasks = (todos) =>({
    type: ActionTypes.GET_TASKS,
    todos
});

const addTask = (newTitle, newText, newStatus) => {
    const newTask = {
        title: newTitle,
        text: newText,
        status: newStatus
    }
    return dispatch =>  axios.post('/todos', newTask)
        .then(response => dispatch(appendTask(response.data)))
};
const appendTask = (newTask) => ({
    type: ActionTypes.ADD_TASK,
    newTask
});

const updateStatus = (id, newStatus) => {
    const changedTask  = {
        _id: id,
        status: newStatus
    }
    return dispatch => axios.put('/todos', changedTask)
        .then(response => {
            const state = store.getState();
            const taskPosition = findPosition(state.todoList.todos, response.data._id);
            return dispatch(changeStatus(taskPosition, response.data))
        });
}
const changeStatus = (taskPosition, changedTask) => ({
    type: ActionTypes.UPDATE_STATUS,
    taskPosition,
    changedTask
})

const updateTask = (id, newTitle, newText) => {
    const changedTask  = {
        _id: id,
        title: newTitle,
        text: newText
    }
    return dispatch => axios.put('/todos', changedTask)
    .then(response => {
        const state = store.getState();
        const taskPosition = findPosition(state.todoList.todos, response.data._id);
        return dispatch(changeTask(taskPosition, response.data))
    });
}
const changeTask = (taskPosition, changedTask) => ({
    type: ActionTypes.UPDATE_TASK,
    taskPosition,
    changedTask
})

const delTask = id => dispatch => axios.delete(`/todos/${id}`)
    .then(response => {
        const state = store.getState();
        const taskPosition = findPosition(state.todoList.todos, id);
        return dispatch(deletedTask(taskPosition))
    });

const deletedTask = taskPosition => ({
    type: ActionTypes.DELETE_TASK,
    taskPosition
});

const findTask = id => dispatch => {
    const state = store.getState();
    const taskPosition = findPosition(state.todoList.todos, id);
    return dispatch(chooseTask(state.todoList.todos[taskPosition]))
}

const chooseTask = (task) => ({
    type: ActionTypes.FIND_TASK,
    task
});

const findPosition = (arr, id) => {
    let position;
    arr.forEach((item, key) => {
        if (item._id === id) {
            position = key;
        }
    });
    return position;
}
export default {getTasks, addTask, updateStatus, updateTask, delTask, findTask}