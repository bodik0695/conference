import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FlatButton } from 'material-ui';
import { Paper } from 'material-ui';
import { red } from 'material-ui/colors';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Actions from '../../../actions/todoActions';


const initialFormState = {
    title: '',
    text: '',
    titleValid: '',
    textValid: ''
}
const errValidationForm = {
    invalidField: 'Поле не заполнено'
}

class ChangeForm extends React.PureComponent{
    state = {
        title: '',
        text: '',
        titleValid: '',
        textValid: ''
    }; 
    componentWillMount() {
        this.props.onGetTask(this.props.match.params.id)
            .then(() => {
                this.setState({
                    title: this.props.detailsStore.task.title,
                    text: this.props.detailsStore.task.text
                })
            })
    }
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
    onChangeTask = () => {
        if (this.state.title !== '' && this.state.text !== '') {
            this.props.onUpdateTask(this.props.match.params.id, this.state.title, this.state.text);
            this.setState(initialFormState);
        }
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
                    <React.Fragment>
                    <Link 
                        to={this.state.title && this.state.text ? '/' : this.props.match.url}
                        className='taskForm_link'
                    >
                            <Button
                                className='myBtn taskForm_btn'
                                onClick = {this.onChangeTask}
                                title='Apply changes'
                            > Change </Button>
                    </Link> 
                    <Link 
                        to='/'
                        className='taskForm_link'
                    >
                            <Button
                                className='myBtn taskForm_btn myCloseBtn'
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

export default connect(
    state => ({
        detailsStore: state.taskDetails
    }),
    dispatch => ({
        onUpdateTask: (id, newTitle, newText) => dispatch(Actions.updateTask(id, newTitle, newText)),
        onGetTask: (id) => dispatch(Actions.getTask(id)),
        onFindTask: (id) => dispatch(Actions.findTask(id))
    })
)(ChangeForm);
