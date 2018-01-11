import sendRequest from './request';
import axios from 'axios';
// const ADD_TODO = 'ADD_TODO';



 function appendTask(response) {
    return {
        type: 'ADD_TASK',
        response
    }
}

function addTask(newTitle, newText, newStatus) {
    const todo = {
        title: newTitle,
        text: newText,
        status: newStatus
    }
    return dispatch => {
        return axios.post('/todos', todo)
        .then(response => dispatch(appendTask(response)))
    }
}

function receiveTasks(todos) {
    return {
        type: 'GET_TASKS',
        todos
    }
}
function getTasks() {
    return dispatch => {
        // return sendRequest({
        //     method: 'GET',
        //     url: '/todos'
        // })
        return axios.get('/todos')
        .then(response => dispatch(receiveTasks(response.data)))
    }
}
export default {addTask, getTasks}