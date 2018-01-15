import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import ToDo from './todo.jsx';
import ChangeForm from './changeForm.jsx';
import Actions  from './actions';
import reducer from './reducers/index.js';
import actions from './actions';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import { synchistoryWithStore } from 'react-router-redux';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
        )
    )
);
// const history = synchistoryWithStore(store);

export const App = () => (
    <Provider store = {store}>
        <Router>
            <Switch >
                <Route path='/' exact component={ToDo} />
                <Route path='/changeform' exact component={ChangeForm} />
            </Switch>
        </Router>
    </Provider>
);

export default App;