import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    // BrowserRouter as Router,
    // HashRouter as Router,
    Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import { ConnectedRouter, syncHistoryWithStore, routerMiddleware, push } from 'react-router-redux';

import TodoList from './pages/main/todoList/todoList.jsx';
import TaskDetails from './pages/main/taskDetails/taskDetails.jsx';
import { store } from './store';
import history from './history';

const syncHistory = syncHistoryWithStore(history, store);
const roMiddleware = routerMiddleware(syncHistory);

export const App = () => (
    <Provider store = {store}>
        <Router history={history}>
            <Switch >
                <Route path='/' exact component={TodoList} />
                <Route path='/taskDetails/:id' 
                // render={({params}) => <TaskDetails taskId={params.id} 
                component={TaskDetails}
                />
            </Switch>
        </Router>
    </Provider>
);
const location = history.location
const unlisten = history.listen((location, action) => {
    console.log('history ', action, location.pathname, location.state)
})

export default App;