import React from 'react';
import sendRequest from './request';
import TaskActions from './taskActions';
import TasksList from './tasksList.jsx';
import TaskForm from './taskForm.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {lightBlue, red} from 'material-ui/colors';
import injectSheet from 'react-jss';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Button from 'material-ui/Button/Button';
import MyModal from './myModal.jsx';
import Actions  from './actions';

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
        tasks: this.props.todosStore.todos,
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
    componentWillMount() {
        this.props.onGetTasks();
        // .then((response) => {
        //     this.setState(() => ({
        //             tasks: response.todos
        //     }));
        // });
        // TaskActions.getTasks().then((res) => {
        //     const resolve = res;
        //     this.setState(() => ({
        //             tasks: resolve
        //     }));
        // });
    }
    componentWillReceiveProps(store, nextState) {
        this.setState({
            tasks: store.todosStore.todos
        })
    }
    onGetTasks = () => {
        TaskActions.getTasks();
        // .then(() => {
        //     this.setState(() => ({
        //             tasks: this.props.todosStore.todos
        //     }));
        // });
    };
    onAddTask = (dataForNewTask) => {
        this.props.onAddTask(dataForNewTask.title, dataForNewTask.text, 0);
            // .then(() => {
            //     this.setState(() => ({
            //         tasks: this.props.todosStore.todos
            //     }));
            // });
        // TaskActions.addTask(dataForNewTask.title, dataForNewTask.text);
        // this.onGetTasks();
    };
    onChangeStatus = (id, status) => {
       status = status === true ? 0 : 1;
       this.props.onUpdateStatus(id, status);
    //    let response1 = TaskActions.changeStatus(id, status);
    };
    onDeleteTask = (id) => {
        this.props.onDeleteTask(id)
            // .then(() => {
            //     this.setState(() => {
            //         tasks: this.props.todosStore.todos
            //     });
            // });
        // let response = TaskActions.delTask(id);
        // this.onGetTasks();
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
            this.props.onUpdateTask(id, newTitle, newText);
                // .then(() => {
                //     this.setState(() => {
                //         tasks: this.props.todosStore.todos
                //     });
                // });
            // let respons = TaskActions.editTask(id, newTitle, newText);
            this.onOpenCloseModal();
            // this.onGetTasks();
        }
    }
    render() {
        console.log('todo render');
        console.log(this.props.todosStore);
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
    }
};
// ToDo.childContextTypes = {
//     deleteTask: PropTypes.func,
//     changeStatus: PropTypes.any
// };

export default connect(
    state => ({
        todosStore: state.todoApp
    }),
    dispatch => ({
        onGetTasks: () => dispatch(Actions.getTasks()),
        onAddTask: (title, text, status) => dispatch(Actions.addTask(title, text, status)),
        onUpdateTask: (id, newTitle, newText) => dispatch(Actions.updateTask(id, newTitle, newText)),
        onUpdateStatus: (id, newStatus) => dispatch(Actions.updateStatus(id, newStatus)),
        onDeleteTask: (id) => dispatch(Actions.delTask(id))
    })
)(ToDo);