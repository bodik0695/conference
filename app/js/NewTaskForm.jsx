import React from 'react';
import {TextField} from 'material-ui';
import {FlatButton} from 'material-ui';
import {Paper} from 'material-ui';

export default class NewTaskForm extends React.Component{
    state = {
        title: '',
        text: ''
    }; 
    onChangeTitle = (e) => {
        this.setState({title: e.target.value});
    };
    onChangeText = (e) => {
        this.setState({text: e.target.value});
    };
    onTransmitState = () => {
        if (this.state.title !== '' && this.state.text !== '') {
            this.props.onAddTask(this.state);
            document.getElementById('newTaskForm_title').value = '';
            document.getElementById('newTaskForm_text').value = '';
            this.state.title = '';
            this.state.text = '';
        }
    }
    render() {
        return (
            <Paper className='task_form' zDepth={2} rounded={false}>
                <form id='newTaskForm' action='' name='newTaskForm' className='newTaskForm'>
                    <TextField
                        id='newTaskForm_title'
                        floatingLabelText='Title'
                        fullWidth = {true}
                        onChange={this.onChangeTitle}
                        className='newTaskForm_text'
                    />
                    <TextField
                        id='newTaskForm_text'
                        floatingLabelText='Text'
                        fullWidth = {true}
                        onChange={this.onChangeText}
                        className='newTaskForm_text'
                    />
                    <FlatButton
                        label='Add'
                        className='myBtn'
                        onClick={this.onTransmitState}
                        title='Add Task'
                    />
                </form>
            </Paper>
        )
    }
}