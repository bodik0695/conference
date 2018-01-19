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
            // const { todos } = getState().todoList;
            // const taskPosition = findPosition(todos, response.data._id);
            return dispatch({
                type: ActionTypes.UPDATE_TASK,
                id: response.data._id,
                changedTask: response.data
            });
        });
}

export const delTask = id => (dispatch, getState) => axios.delete(`/todos/${id}`)
    .then(response => {
        // const state = getState();
        // const taskPosition = findPosition(state.todoList.todos, id);
        return dispatch({
            type: ActionTypes.DELETE_TASK,
            id
        })
    });