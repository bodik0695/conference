import React from 'react';
import TaskActions from './taskActions';

export default class NewTaskForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {title: ''};
    }
    onChangeTitle(e) {
        this.setState({title: e.target.value});
        console.log(this.state.title);
    }   
    onChangeText(e) {
        const { value } = e.target;
        // this.setState({text: e.target.value});
        this.setState((s,p) => ({
            title: value
        }));
        console.log(e.persistent);
    } 
    render() {
        console.log(this.state.title);
        return (
            <form id="newTaskForm" action="" name="newTaskForm" className="newTaskForm">
                <input type="submit" id="addTask" className="myBtn newTaskForm_btn" 
                value="Add" onClick={TaskActions.addtask.bind(this)}/>
            </form>
        )
    }
}