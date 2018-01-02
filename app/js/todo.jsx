import React from 'react';
import ReactDOM from 'react-dom';
import sendRequest from './request';
import TaskActions from './taskActions';
import TasksList from './tasksList.jsx';
import NewTaskForm from './newTaskForm.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {MuiThemeProvider} from 'material-ui/styles';

injectTapEventPlugin();

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
        console.log('todo render');
        return (
            <MuiThemeProvider>
                <div className='todo'>
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
        )
    }
};

ReactDOM.render(<ToDo />, document.getElementById('container'));