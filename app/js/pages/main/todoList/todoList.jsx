import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {lightBlue, red} from 'material-ui/colors';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
// import Button from 'material-ui/Button/Button';
// import MyModal from './myModal.jsx';

import TasksList from '../../../components/tasksList.jsx';
import TaskForm from '../../../components/taskForm.jsx';
import Actions from '../../../actions/todoActions';

injectTapEventPlugin();

const theme = createMuiTheme({
    palette: {
      primary: lightBlue,
      error: red,
    }
});

class TodoList extends React.PureComponent{
    state = {
        tasks: [],
        openModal: false,
        editedTask: {
            title: '',
            text: '',
            id: ''
        }
    }
    componentWillMount() {
        this.props.onGetTasks();
    }
    componentWillReceiveProps(store, nextState) {
        this.setState({
            tasks: store.todosStore.todos
        })
    }
    onGetTasks = () => {
        TaskActions.getTasks();
    };
    onAddTask = (dataForNewTask) => {
        this.props.onAddTask(dataForNewTask.title, dataForNewTask.text, 0);
    };
    render() {
        console.log('todo render');
        return (
            <MuiThemeProvider theme={theme}>
                    <div className=''>
                    <h1 className='todo_title'>My todo</h1>
                        <TaskForm onAddTask = {this.onAddTask}/>
                        <div className='tasks'>
                            <TasksList 
                                id='tasksList'
                                className='tasksList'
                                tasks={this.state.tasks}
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
    dispatch => ({
        onGetTasks: () => dispatch(Actions.getTasks()),
        onAddTask: (title, text, status) => dispatch(Actions.addTask(title, text, status)),
        onUpdateTask: (id, newTitle, newText) => dispatch(Actions.updateTask(id, newTitle, newText)),
        onUpdateStatus: (id, newStatus) => dispatch(Actions.updateStatus(id, newStatus)),
        onDeleteTask: (id) => dispatch(Actions.delTask(id)),
        onFindTask: (id) => dispatch(Actions.findTask(id))
    })
)(TodoList);