import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FlatButton } from 'material-ui';
import { Paper } from 'material-ui';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addTask } from '../actions/todoActions';

const initialFormState = {
    form: {
        title: '',
        text: '',
    },
    errors: {
        titleValid: '',
        textValid: ''
    }
}
const errValidationForm = {
    invalidField: 'Поле не заполнено'
}

class TaskForm extends React.PureComponent{
    state = {
        form: {
            title: '',
            text: ''
        },
        errors: {
            titleValid: '',
            textValid: ''
        }
    }; 
    onChangeValue = (e) => {
        const target = e.target;
        const nameValid = `${[target.name]}Valid`;
        if (target.value === '') {
            this.setState((prevState) => ({
                errors: {
                    ...prevState.errors,
                    [nameValid]: errValidationForm.invalidField
                }
            }))
        } else {
            this.setState((prevState) => ({
                errors: {
                    ...prevState.errors,
                    [nameValid]: ''
                }
            }))
        };
        this.setState((prevState) => ({
            form: {
                ...prevState.form,
                [target.name]: target.value
            }
        }));
    };
    onTransmitState = () => {
        if (this.state.form.title !== '' && this.state.form.text !== '') {
            this.props.onAddTask(this.state.form.title, this.state.form.text, 0);
            this.setState(initialFormState);
        } else if (this.state.form.title === '' && this.state.form.text === '') {
            this.setState({
                errors: {
                    titleValid: errValidationForm.invalidField,
                    textValid: errValidationForm.invalidField
                }
            })
        } else if (this.state.form.title === '') {
            this.setState((prevState) => ({
                errors: {
                    ...prevState.errors,
                    titleValid: errValidationForm.invalidField
                }
            }))
        } else if (this.state.form.text === '') {
            this.setState((prevState) => ({
                errors: {
                    ...prevState.errors,
                    textValid: errValidationForm.invalidField
                }
            }))
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
                        value = {this.state.form.title}
                        helperText = {this.state.errors.titleValid}
                    />
                    <TextField
                        className='taskForm_text'
                        label='Text'
                        name = 'text'
                        fullWidth
                        onChange = {this.onChangeValue}
                        value = {this.state.form.text}
                        helperText = {this.state.errors.textValid}
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

export default connect(
    state => ({
        todosStore: state
    }),
    dispatch => ({
        onAddTask: (title, text, status) => dispatch(addTask(title, text, status))
    })
)(TaskForm);