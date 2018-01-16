import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FlatButton } from 'material-ui';
import { Paper } from 'material-ui';
import { red } from 'material-ui/colors';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { getTask, updateTask } from '../../../actions/todoActions';

const errValidationForm = {
    invalidField: 'Поле не заполнено'
}

class ChangeForm extends React.PureComponent{
    state = {
        form: {
            title: '',
            text: '',
        },
        errors: {}
    }; 

    componentWillMount() {
        this.props.onGetTask(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        const { title, text } = this.state.form

        if (title === '' && text ==='') {
            this.setState({
                form: {
                    title: nextProps.task.title,
                    text: nextProps.task.text
                }
            });
        }
    }

    onChangeValue = (e) => {
        const target = e.target;

        if (!e.target.value) {
            this.setState((prevState) => ({
                errors: {
                    ...prevState.errors,
                    [target.name]: 'Поле не заполнено'
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

    onChangeTask = () => {
        const { title, text } = this.state.form;

        if (title !== '' && text !== '') {
            this.props.onUpdateTask(this.props.match.params.id, { 
                title,
                text
            });
        }
    }

    render() {
        return (
            <Paper className='task_form' elevation={3}>
                <form action='' name='taskForm' className='taskForm'>
                    <TextField
                        error={this.state.form.title ? null : true}
                        className='taskForm_text'
                        label='Title'
                        name = 'title'
                        fullWidth
                        onChange = {this.onChangeValue}
                        value = {this.state.form.title}
                        helperText = {this.state.errors.title}
                    />
                    <TextField
                        error={this.state.form.text ? null : true}
                        className='taskForm_text'
                        label='Text'
                        name = 'text'
                        fullWidth
                        onChange = {this.onChangeValue}
                        value = {this.state.form.text}
                        helperText = {this.state.errors.text}
                    />
                    <React.Fragment>
                    <Link 
                        to={this.state.form.title && this.state.form.text ? '/' : this.props.match.url}
                        className='taskForm_link'
                    >
                        <Button
                            className='myBtn taskForm_btn'
                            onClick={this.onChangeTask}
                            title='Apply changes'
                        >
                        Change
                        </Button>
                    </Link> 
                    <Link 
                        to='/'
                        className='taskForm_link'
                    >
                            <Button
                                className='myBtn taskForm_btn myCloseBtn'
                                title='Close edit window'
                                color='accent'
                            > 
                                Close
                            </Button>
                        </Link> 
                    </React.Fragment>
                </form>
            </Paper>
        )
    }
}

export default connect(
    state => ({
        task: state.taskDetails.task
    }),
    dispatch => bindActionCreators({
        onUpdateTask: updateTask,
        onGetTask: getTask
    }, dispatch)
)(ChangeForm);
