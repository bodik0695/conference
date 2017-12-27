import React from 'react';
import ReactDOM from 'react-dom';
import sendRequest from './request'

class NewTaskForm extends React.Component{
    async addtask(e){
        e.preventDefault();
        console.log('addtask');
        const getReq = {
            method: 'GET',
            url: '/todos',
        }

        const tasks = await sendRequest(getReq);
        console.log(tasks)

        // for (const i of tasks) {
        //     if (i.status === 0) {
        //         i.status = '';
        //     } else if (i.status === 1) {
        //         i.status = 'checked';
        //     }
        // }
    }
    render() {
        return (
            <form id="newTaskForm" action="" name="newTaskForm" className="newTaskForm">
                <input id="newTitle" type="text" className ="newTaskForm_title" placeholder="Task Title" />
                <textarea id="newText" className="newTaskForm_text" placeholder="Task Text"></textarea>
                <input type="submit" id="addTask" className="myBtn newTaskForm_btn" value="Add" onClick={this.addtask}/>
            </form>
        )
    }
};

class Task extends React.Component{
    render() {
        return (
            <li id="" className="task">
                <form action="" name="task_form" className="task_form">
                    <div className="task_baseElements">
                        <div className="task_checkbox">
                                <input type="checkbox" />
                        </div>
                        <div className="task_title">
                            <p className="task_titleTxt">title</p>
                        </div>
                        <button id="task_editBtn" className="myBtn task_editBtn"  title="Edit Task">
                            <img src="app/images/editWhite.svg" alt="" className="task_editBtnIcon" />
                        </button>
                        <button id="task_delBtn" className="myBtn task_delBtn" title="Delete Task"><div className="task_delBtnIcon">&times;</div></button>
                    </div>
                    <div className="col-12 col-md-12 task_text" title="text">
                        <p className="task_textTxt">text</p>
                    </div>
                </form>
            </li>
        )
    }
};

class ToDo extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = (state, props) => ({
    //         newTask: props.newTask,
    //         tasks: props.tasks
    //     })
    // }
    tasks() {
        if (this.props.one == 1) {
            let task = <Task key={0} />;
            let tasks = [];
            for (let i = 0; i < 3; i++) {
                tasks.push(task);
            }
            return tasks;
             
                                 
        }
    }
    render() {
        return (
            <div className='todo'>
            <h1 className='todo_title'>My todo</h1>
                <NewTaskForm />
                <div className='tasks'>
                    <ul id='tasksList' className='tasksList'>
                        {this.tasks()}
                    </ul>
                </div>
            </div>
        )
    }
};

ReactDOM.render(<ToDo  one='1'/>, document.getElementById('container'));