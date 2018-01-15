import React from 'react';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
// import { SvgIcon } from 'material-ui';
// import EditIcon from './editIcon.jsx';
// import DelIcon from './delIcon.jsx';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { Delete, Edit } from 'material-ui-icons';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const styles = theme => ({
    task_form: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: '300px',
        border: '1px solid rgb(200, 197, 197)',
        borderRadius: '5px',
        minHeight: '45px'
    },
    input: {
      display: 'none',
    },
  });


export default class Task extends React.PureComponent{
    state = {
        checked: false,
        justify: 'space-around'
    }
    
    componentWillMount() {
        this.setState(() => ({
             checked: this.props.task.status == 1 ? true : false
        }));
    }

    updateCheck = () => {
        this.setState((oldState) => ({
           checked: !oldState.checked
        }));
        this.props.onChangeStatus(this.props.identificator, this.state.checked);
        // this.context.changeStatus(this.props.identificator, this.state.checked);

    }
    onDelTask = () => {
        this.props.onDeleteTask(this.props.identificator);
        // this.context.deleteTask(this.props.identificator);
    }
    onChangeTask = () => {
        this.props.onOpenCloseModal(this.props.identificator, this.props.task.title, this.props.task.text); // id, title, text
    }

    render() {
        return (
            <Paper className='task_form' elevation={3}>
                <form action='' name='task_form' className='task_form'>
                    <div className='task_baseElements'>
                    <Grid 
                        container
                        justify = {this.state.justify}
                    >
                        <Grid item sm={7}>
                            <FormControlLabel
                                control = {
                                    <Checkbox
                                    checked={this.state.checked}
                                    onChange={this.updateCheck}
                                    />
                                }
                                label = {this.props.task.title}
                                className = 'task_title'
                                title = {this.props.task.title}
                            />
                        </Grid>
                        <Grid item sm={4}>
                            <Link 
                            to='/changeform'
                            params={{ testvalue: 'hello' }}
                            >
                                <IconButton
                                    className='myBtn task_btn'
                                    title='Edit Task'
                                    // onClick = {this.onChangeTask}
                                >
                                <Edit />
                                </IconButton>
                            </Link>
                            <IconButton
                                className='myBtn task_btn'
                                title='Delete Task'
                                color='primary'
                                onClick = {this.onDelTask}
                            >
                            <Delete />
                            </IconButton>
                        </Grid>
                    </Grid>
                    </div>
                    <p className='task_text' title={this.props.task.text}>{this.props.task.text}</p>
                </form>
            </Paper>
        );
    }
}

// Task.contextTypes = {
//     deleteTask: PropTypes.any,
//     changeStatus: PropTypes.any
// }