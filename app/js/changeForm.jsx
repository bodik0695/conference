import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FlatButton } from 'material-ui';
import { Paper } from 'material-ui';
import { red } from 'material-ui/colors';
import { connect } from 'react-redux';
import Actions from './actions';

import { Link } from 'react-router-dom';

const initialFormState = {
    title: '',
    text: '',
    titleCurrent: '',
    textCurrent: '',
    titleValid: '',
    textValid: ''
}
const errValidationForm = {
    invalidField: 'Поле не заполнено'
}

class ChangeForm extends React.PureComponent{
    state = {
        title: this.props.title,
        text: this.props.text,
        titleCurrent: this.props.title,
        textCurrent: this.props.text,
        titleValid: '',
        textValid: ''
    }; 
    componentWillMount() {
        // this.props.params.taskId
    }
    onChangeValue = (e) => {
        const nameValid = `${[e.target.name]}Valid`;
        const nameCurrent = `${[e.target.name]}Current`;
        if (!e.target.value) {
            this.setState({
                [nameValid]: 'Поле не заполнено'
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value,
                [nameValid]: ''
            })
        }
        this.setState({[nameCurrent]: e.target.value})
    };
    onTransmitState = () => {
        if (this.state.title && this.state.text) {
            this.props.onAddTask({...this.state});
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
    onChangeTask = () => {
        if (this.props.editedTask.id && this.state.title && this.state.text) {
            this.props.onUpdateTask(this.props.editedTask.id, this.state.title, this.state.text);
            this.props.onOpenCloseModal();
        }
    }
    render() {
        console.log(this);
        return (
            <Paper className='task_form' elevation={3}>
                <form action='' name='taskForm' className='taskForm'>
                    <TextField
                        className='taskForm_text'
                        label='Title'
                        name = 'title'
                        fullWidth
                        onChange = {this.onChangeValue}
                        value = {this.state.titleCurrent}
                        helperText = {this.state.titleValid}
                    />
                    <TextField
                        className='taskForm_text'
                        label='Text'
                        name = 'text'
                        fullWidth
                        onChange = {this.onChangeValue}
                        value = {this.state.textCurrent}
                        helperText = {this.state.textValid}
                    />
                    <React.Fragment>
                        <Button
                            className='myBtn taskForm_btn'
                            onClick = {this.onChangeTask}
                            title='Apply changes'
                        > Change </Button>
                        <Link to='/'>
                            <Button
                                className='myBtn taskForm_btn myCloseBtn'
                                // onClick = {this.props.onOpenCloseModal}
                                title='Close edit window'
                                color = 'accent'
                            > Close </Button>
                        </Link> 
                    </React.Fragment>
                    
                </form>
            </Paper>
        )
    }
}
ChangeForm.defaultProps = {
    title: '',
    text: ''
};

export default connect(
    state => ({
        todosStore: state
    }),
    dispatch => ({
        onGetTasks: () => dispatch(Actions.getTasks()),
        onAddTask: (title, text, status) => dispatch(Actions.addTask(title, text, status)),
        onUpdateTask: (id, newTitle, newText) => dispatch(Actions.updateTask(id, newTitle, newText)),
        onUpdateStatus: (id, newStatus) => dispatch(Actions.updateStatus(id, newStatus)),
        onDeleteTask: (id) => dispatch(Actions.delTask(id))
    })
)(ChangeForm);