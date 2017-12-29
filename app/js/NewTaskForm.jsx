import React from 'react';
import TaskActions from './taskActions';
import Title from './title.jsx';
import Text from './text.jsx';

export default class NewTaskForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        };
    }
    onChangeTitle(e) {
        this.setState({title: e.target.value});
    }   
    onChangeText(e) {
        // console.log(e.target);
        //const { value } = e.target;
        this.setState({text: e.target.value});
        // this.setState((s,p) => ({
        //     title: value
        // }));
        // console.log(e.persistent);
    } 
    render() {
        // console.log(this.state);
        return (
            <form id="newTaskForm" action="" name="newTaskForm" className="newTaskForm">
                <Title title={this.state.title} onChangeTitle={this.onChangeTitle.bind(this)}/>
                <Text text={this.state.text} onChangeText={this.onChangeText.bind(this)}/>
                <input type="submit" id="addTask" className="myBtn newTaskForm_btn" 
                value="Add" onClick={TaskActions.addtask.bind(this)}/>
            </form>
        )
    }
}