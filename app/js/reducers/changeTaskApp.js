import ActionTypes from '../actionTypes';

const initialState = {
    changedTodo: {}
}

export default function changeTaskApp (state = initialState, action) {
    if (action.type === ActionTypes.CHANGE_TASK) {
        return {
            ...state,
            changedTodo: {
                id: action.id,
                title: action.title,
                text: action.text,
                status: action.status
            }
        }
    } else if (action.type === ActionTypes.APPLY_CHANGE) {
        return state;
    }
}