import React from 'react';
import ReactDOM from 'react-dom';
import sendRequest from './request';
import TaskActions from './taskActions';
import TasksList from './tasksList.jsx';
import NewTaskForm from './newTaskForm.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {lightBlue, red} from 'material-ui/colors';
import injectSheet from 'react-jss';
import { withStyles } from 'material-ui/styles';

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
class ToDo extends React.Component{
    state = {
        tasks: []
    }
    onAddTask = (dataForNewTask) => {
        TaskActions.addTask(dataForNewTask.title, dataForNewTask.text);
        TaskActions.getTasks().then((res) => {
            const resolve = res;
            this.setState(() => {
                return {
                    tasks: resolve
                }
            });
        })
    };
    changeStatus = (id, status) => {
       status = status === true ? 0 : 1;
       let response = TaskActions.changeStatus(id, status);
    };
    componentWillMount() {
        TaskActions.getTasks().then((res) => {
            const resolve = res;
            this.setState(() => {
                return {
                    tasks: resolve
                }
            });
        })
    }
    render() {
        console.log('todo render', this.props);
        const MyKomponent = (
        <MuiThemeProvider theme={theme}>
                <div className=''>
                <h1 className='todo_title'>My todo</h1>
                    <NewTaskForm onAddTask = {this.onAddTask}/>
                    <div className='tasks'>
                        <TasksList 
                            id='tasksList'
                            className='tasksList'
                            tasks={this.state.tasks}
                            changeStatus={this.changeStatus}
                        />
                    </div>
                </div>
            </MuiThemeProvider>
        );
        return MyKomponent;
    }
};

ReactDOM.render(<ToDo />, document.getElementById('container'));