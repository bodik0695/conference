import React from 'react';
import Task from './task.jsx';
import TaskWrapper from './taskWrapper.jsx';

export default class TasksList extends React.Component{

    render() {
        if (this.props.tasks.length === 0) {
            return null;
        }
        return (
            <ul id='tasksList' className='tasksList'>
                <TaskWrapper >
                    { 
                        this.props.tasks.map((item) => {
                            return <Task 
                                    key={item._id}
                                    identificator={item._id}
                                    task={item}
                                />
                        })
                    }
                </TaskWrapper>
            </ul>
        )
    }
}