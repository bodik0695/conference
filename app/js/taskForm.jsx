import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FlatButton } from 'material-ui';
import { Paper } from 'material-ui';
import { red } from 'material-ui/colors';

const redColor = red[500];

export default class TaskForm extends React.PureComponent{
    state = {
        title: this.props.title,
        text: this.props.text
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
    onChangeTask = () => {
        this.props.onEditTask(this.props.editedTask.id, this.state.title, this.state.text);
    }
    render() {
        return (
            <Paper className='task_form' elevation={3}>
                <form action='' name='taskForm' className='taskForm'>
                    <TextField
                        className='taskForm_text'
                        label='Title'
                        name = 'title'
                        fullWidth
                        onChange = {this.onChangeValue}
                        value = {this.state.title}
                    />
                    <TextField
                        className='taskForm_text'
                        label='Text'
                        name = 'text'
                        fullWidth
                        onChange = {this.onChangeValue}
                        value = {this.state.text}
                    />
                    {this.props.newTask ? <Button
                        className='myBtn taskForm_btn'
                        onClick = {this.onTransmitState}
                        title='Add Task'
                    > Add </Button> : null
                    }
                    {this.props.editTask ? <React.Fragment>
                        <Button
                            className='myBtn taskForm_btn'
                            onClick = {this.onChangeTask}
                            title='Apply changes'
                        > Change </Button>
                        <Button
                            className='myBtn taskForm_btn myCloseBtn'
                            onClick = {this.props.onOpenCloseModal}
                            title='Close edit window'
                            color = 'accent'
                        > Close </Button> 
                    </React.Fragment> : null
                    }
                </form>
            </Paper>
        )
    }
}
TaskForm.defaultProps = {
    title: '',
    text: '',
    newTask: true,
    editTask: false
};