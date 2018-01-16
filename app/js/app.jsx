import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import TodoList from './pages/main/todoList/todoList.jsx';
import TaskDetails from './pages/main/taskDetails/taskDetails.jsx';
import { store } from './store';


export const App = () => (
    <Provider store = {store}>
        <HashRouter>
            <Switch >
                <Route path='/' exact component={TodoList} />
                <Route path='/taskDetails/:id' exact 
                // render={({params}) => <TaskDetails taskId={params.id} 
                component={TaskDetails}
                />} />
            </Switch>
        </HashRouter>
    </Provider>
);

export default App;