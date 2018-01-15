import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';

import ToDo from './pages/main/todoList/todoList.jsx';
// import ChangeForm from './changeForm.jsx';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import { store } from './store';

export const App = () => (
    <Provider store = {store}>
        <Router>
            <Switch >
                <Route path='/' exact component={ToDo} />
                {/* <Route path='/changeform' exact component={ChangeForm} /> */}
            </Switch>
        </Router>
    </Provider>
);

export default App;