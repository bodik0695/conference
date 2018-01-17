import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {lightBlue, red} from 'material-ui/colors';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TasksList from '../../../components/tasksList.jsx';
import TaskForm from '../../../components/taskForm.jsx';
import { getTasks, addTask, getTask } from '../../../actions/todoActions';

injectTapEventPlugin();

const theme = createMuiTheme({
    palette: {
      primary: lightBlue,
      error: red,
    }
});

class TodoList extends React.PureComponent{
    componentWillMount() {
        this.props.onGetTasks();
    }
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                    <div className=''>
                    <h1 className='todo_title'>My todo</h1>
                        <TaskForm />
                        <div className='tasks'>
                            <TasksList 
                                id='tasksList'
                                className='tasksList'
                                tasks={this.props.todosStore.todos}
                            />
                        </div>
                    </div>
            </MuiThemeProvider>
        );
    }
};

export default connect(
    state => ({
        todosStore: state.todoList
    }),
    dispatch => bindActionCreators({
        onGetTasks: getTasks,
    }, dispatch)
)(TodoList);