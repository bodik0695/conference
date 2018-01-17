import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todoListReducer from './todoListReducer';
import detailsReducer from './detailsReducer';

export default combineReducers({
    routing: routerReducer,
    todoList: todoListReducer,
    taskDetails: detailsReducer
});