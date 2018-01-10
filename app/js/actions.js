import sendRequest from './request';
// const ADD_TODO = 'ADD_TODO';

function addTodo(title, text, status) {
    return {
      type: 'ADD_TODO',
      title,
      text,
      status
    }
}
function receiveTodos(todos) {
    return {
        type: 'GET_TODOS',
        todos: todos
    }
}
function getTodos() {
    return dispatch => {
        return sendRequest({
            method: 'GET',
            url: '/todos'
        })
        .then(todos => dispatch(receiveTodos(todos)))
    }
}
export default {addTodo, getTodos}