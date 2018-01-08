import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FlatButton } from 'material-ui';
import { Paper } from 'material-ui';

export default class NewTaskForm extends React.PureComponent{
    state = {
        title: '',
        text: ''
    }; 
    onChangeValue = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    onTransmitState = () => {
        if (this.state.title !== '' && this.state.text !== '') {
            this.props.onAddTask(this.state);
            this.setState({
                title: '',
                text: ''
            });
        }
    };
    render() {
        return (
            <Paper className='task_form' elevation={3}>
                <form action='' name='newTaskForm' className='newTaskForm'>
                    <TextField
                        className='newTaskForm_text'
                        label='Title'
                        name = 'title'
                        fullWidth
                        onChange = {this.onChangeValue}
                        value = {this.state.title}
                    />
                    <TextField
                        className='newTaskForm_text'
                        label='Text'
                        name = 'text'
                        fullWidth
                        onChange = {this.onChangeValue}
                        value = {this.state.text}
                    />
                    <Button
                        className='myBtn newTaskForm_btn'
                        onClick = {this.onTransmitState}
                        title='Add Task'
                    > Add </Button>
                </form>
            </Paper>
        )
    }
}