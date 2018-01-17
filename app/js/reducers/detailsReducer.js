import { createReducer } from 'redux-create-reducer';
import ActionTypes from '../actions/actionTypes';
import findPosition from '../utils/findPosition';

const initialState = {
    task: {}
}

export const detailsReducer = createReducer(initialState, {
    [ActionTypes.FIND_TASK] (state, action) {
        return {
            ...state,
            task: {
                ...action.task
            }
        }
    },
    [ActionTypes.GET_TASK] (state, action) {
        return {
            ...state,
            task: {
                ...action.payload
            }
        }
    }
});
export default detailsReducer;