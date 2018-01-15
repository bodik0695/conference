import { createReducer } from 'redux-create-reducer';
import ActionTypes from '../actions/actionTypes';


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
    }
});
export default detailsReducer;