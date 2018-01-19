import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, push } from 'react-router-redux';

import reducer from './reducers/index.js';
import history from './history';

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            apiMiddleware,
            
        )
    )
);

export default store;