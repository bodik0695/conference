import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FlatButton } from 'material-ui';
import { Paper } from 'material-ui';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { addTask } from '../actions/todoActions';

const initialFormState = {
    form: {
        title: '',
        text: '',
        status: 0
    },
    errors: {}
}
const errValidationForm = {
    invalidField: 'Поле не заполнено'
}

class TaskForm extends React.PureComponent{
    state = {
        form: {
            title: '',
            text: '',
            status: 0
        },
        errors: {}
    }; 
    onChangeValue = (e) => {
        console.log(this.state.form);
        const target = e.target;

        if (target.value === '') {
            this.setState((prevState) => ({
                errors: {
                    ...prevState.errors,
                    [target.name]: errValidationForm.invalidField
                }
            }))
        } else {
            this.setState((prevState) => ({
                errors: {
                    ...prevState.errors,
                    [target.name]: ''
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
        const form = this.state.form;
        if (form.title !== '' && form.text !== '') {
            this.props.onAddTask(form);
            this.setState(initialFormState);
        } else if (form.title === '' && form.text === '') {
            this.setState({
                errors: {
                    title: errValidationForm.invalidField,
                    text: errValidationForm.invalidField
                }
            })
        } else if (form.title === '') {
            this.setState((prevState) => ({
                errors: {
                    ...prevState.errors,
                    title: errValidationForm.invalidField
                }
            }))
        } else if (form.text === '') {
            this.setState((prevState) => ({
                errors: {
                    ...prevState.errors,
                    text: errValidationForm.invalidField
                }
            }))
        };
    }
    render() {
        return (
            <Paper className='task_form' elevation={3}>
                <form action='' name='taskForm' className='taskForm'>
                    <TextField
                        error={!this.state.errors.title ? null : true}
                        className='taskForm_text'
                        label='Title'
                        name = 'title'
                        fullWidth
                        onChange = {this.onChangeValue}
                        value = {this.state.form.title}
                        helperText = {this.state.errors.title}
                    />
                    <TextField
                        error={this.state.errors.text ? true : null }
                        className='taskForm_text'
                        label='Text'
                        name = 'text'
                        fullWidth
                        onChange = {this.onChangeValue}
                        value = {this.state.form.text}
                        helperText = {this.state.errors.text}
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
    dispatch => bindActionCreators({
        onAddTask: addTask
    }, dispatch)
)(TaskForm);