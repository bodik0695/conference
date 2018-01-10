import React from 'react';
import ReactDOM from 'react-dom';
import sendRequest from './request';
import TaskActions from './taskActions';
import TasksList from './tasksList.jsx';
import TaskForm from './taskForm.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {lightBlue, red} from 'material-ui/colors';
import injectSheet from 'react-jss';
import { withStyles } from 'material-ui/styles';
// import PropTypes from 'prop-types';
import Button from 'material-ui/Button/Button';
import MyModal from './myModal.jsx';
import Actions  from './actions';
import todoApp from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


injectTapEventPlugin();

const theme = createMuiTheme({
    palette: {
      primary: lightBlue,
      error: red,
    }
  });

const styles = theme => ({
    todo: {
        background: '#eee',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        width: '60%',
        maxWidth: '500px',
        flexwrap: 'wrap',
        flexDirection: 'column'
    },
    todo_title: {

    },
    tasks: {

    }
  });

@withStyles(styles)
class ToDo extends React.PureComponent{
    state = {
        tasks: [],
        openModal: false,
        editedTask: {
            title: '',
            text: '',
            id: ''
        }
    }
    // getChildContext = () => ({
    //     deleteTask: this.onDeleteTask,
    //     changeStatus: this.onChangeStatus
    // });
      
    onGetTasks = () => {
        TaskActions.getTasks().then((res) => {
            const resolve = res;
            this.setState(() => ({
                    tasks: resolve
            }));
        });
    };
    onAddTask = (dataForNewTask) => {
        TaskActions.addTask(dataForNewTask.title, dataForNewTask.text);
        this.onGetTasks();
    };
    onChangeStatus = (id, status) => {
       status = status === true ? 0 : 1;
       let response = TaskActions.changeStatus(id, status);
    };
    onDeleteTask = (id) => {
        let response = TaskActions.delTask(id);
        this.onGetTasks();
    }
    onOpenCloseModal = (id, title, text) => {
        if (id && title && text) {
            this.setState(() => ({
                editedTask: {
                    id: id,
                    title: title,
                    text: text
                }
            }));
        } 
        this.setState((prevState) => ({
            openModal: !prevState.openModal
        }));
        if (this.state.editedTask.id !== '') {
            this.setState(() => ({
                editedTask: {
                    id: '',
                    title: '',
                    text: ''
                }
            }));
        }
    }
    onEditTask = (id, newTitle, newText) => {
        if (id && newTitle && newText) {
            let respons = TaskActions.editTask(id, newTitle, newText);
            this.onOpenCloseModal();
            this.onGetTasks();
        }
    }
    componentWillMount() {
        TaskActions.getTasks().then((res) => {
            const resolve = res;
            this.setState(() => ({
                    tasks: resolve
            }));
        });
    }
    render() {
        console.log('todo render');
        const MyKomponent = (
        <MuiThemeProvider theme={theme}>
                <div className=''>
                <h1 className='todo_title'>My todo</h1>
                    <TaskForm onAddTask = {this.onAddTask}/>
                    <div className='tasks'>
                        <TasksList 
                            id='tasksList'
                            className='tasksList'
                            tasks={this.state.tasks}
                            onChangeStatus={this.onChangeStatus}
                            onDeleteTask = {this.onDeleteTask}
                            onOpenCloseModal = {this.onOpenCloseModal}
                        />
                    </div>
                </div>
                <MyModal 
                    openModal = {this.state.openModal} 
                    onEditTask = {this.onEditTask}
                    onOpenCloseModal = {this.onOpenCloseModal}
                    editedTask = {this.state.editedTask}
                />
            </MuiThemeProvider>
        );
        return MyKomponent;
    }
};
// ToDo.childContextTypes = {
//     deleteTask: PropTypes.func,
//     changeStatus: PropTypes.any
// };

const store = createStore(
    todoApp,
    applyMiddleware(
        thunkMiddleware
      )
    
);

console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(Actions.addTodo('title_1', 'text_1', 0));
store.dispatch(Actions.addTodo('title_2', 'text_2', 0));
store.dispatch(Actions.getTodos()).then(() => console.log(store.getState()));
unsubscribe();

ReactDOM.render(<ToDo />, document.getElementById('container'));