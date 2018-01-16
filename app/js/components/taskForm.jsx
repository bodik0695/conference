import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FlatButton } from 'material-ui';
import { Paper } from 'material-ui';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Actions from '../actions/todoActions';

const initialFormState = {
    title: '',
    text: '',
    titleValid: '',
    textValid: ''
}
const errValidationForm = {
    invalidField: 'Поле не заполнено'
}

class TaskForm extends React.PureComponent{
    state = {
        title: this.props.title,
        text: this.props.text,
        titleValid: '',
        textValid: ''
    }; 
    onChangeValue = (e) => {
        const nameValid = `${[e.target.name]}Valid`;
        if (!e.target.value) {
            this.setState({
                [nameValid]: 'Поле не заполнено'
            })
        } else {
            this.setState({
                [nameValid]: ''
            })
        }
        this.setState({[e.target.name]: e.target.value})
    };
    onTransmitState = () => {
        if (this.state.title !== '' && this.state.text !== '') {
            this.props.onAddTask(this.state.title, this.state.text, 0);
            this.setState(initialFormState);
        } else if (!this.state.title && !this.state.text) {
            this.setState({
                titleValid: errValidationForm.invalidField,
                textValid: errValidationForm.invalidField
            })
        } else if (!this.state.title) {
            this.setState({titleValid: errValidationForm.invalidField})
        } else if (!this.state.text) {
            this.setState({textValid: errValidationForm.invalidField})
        };
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
                        helperText = {this.state.titleValid}
                    />
                    <TextField
                        className='taskForm_text'
                        label='Text'
                        name = 'text'
                        fullWidth
                        onChange = {this.onChangeValue}
                        value = {this.state.text}
                        helperText = {this.state.textValid}
                    />
                    <Button
                        className='myBtn taskForm_btn -top20'
                        onClick = {this.onTransmitState}
                        title='Add Task'
                    > Add </Button>
                </form>
            </Paper>
        )
    }
}
TaskForm.defaultProps = {
    title: '',
    text: ''
};

export default connect(
    state => ({
        todosStore: state
    }),
    dispatch => ({
        onAddTask: (title, text, status) => dispatch(Actions.addTask(title, text, status))
    })
)(TaskForm);