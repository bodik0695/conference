import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { synchistoryWithStore } from 'react-router-redux';

import reducer from './reducers/index.js';

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
        )
    )
);

export default store;