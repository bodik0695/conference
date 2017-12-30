import React from 'react';
import ReactDOM from 'react-dom';
import sendRequest from './request';
import TaskActions from './taskActions';
import Title from './title.jsx';
import Text from './text.jsx';
// import Task from './task.jsx';
import NewTaskForm from './newTaskForm.jsx';

class ToDo extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = (state, props) => ({
    //         newTask: props.newTask,
    //         tasks: props.tasks
    //     })
    // }
    
    render() {
        return (
            <div className='todo'>
            <h1 className='todo_title'>My todo</h1>
                <NewTaskForm />
                <div className='tasks'>
                    <ul id='tasksList' className='tasksList'>
                    {/*<Task />;*/}
                    </ul>
                </div>
            </div>
        )
    }
};

ReactDOM.render(<ToDo />, document.getElementById('container'));