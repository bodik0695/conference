import React from 'react';
import Task from './task.jsx';

export default class TasksList extends React.Component{

    render() {
        return (
            <ul id='tasksList' className='tasksList'>
                {
                    this.props.tasks.map((item) => {
                        return <Task 
                            key = {item._id}
                            identificator = {item._id}
                            task = {item}
                            // onChangeStatus = {this.props.onChangeStatus}
                            // onDeleteTask = {this.props.onDeleteTask}
                            // onEditTask = {this.props.onEditTask}
                            // onOpenCloseModal = {this.props.onOpenCloseModal}
                        />
                    })
                }
            </ul>
        )
    }
}