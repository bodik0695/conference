import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todoListReducer from './todoApp';


export default combineReducers({
    routing: routerReducer,
    todoApp: todoListReducer
    // todoList: todoListReducer,
    // todoDetail: todoDetailReducer
});