import React from 'react';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import { SvgIcon } from 'material-ui';
import EditIcon from './editIcon.jsx';
import DelIcon from './delIcon.jsx';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { Delete, Edit } from 'material-ui-icons';
import { FormGroup, FormControlLabel } from 'material-ui/Form';

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
        checked: false
    }

    updateCheck = () => {
        this.setState((oldState) => {
          return {
            checked: !oldState.checked,
          };
        });
        this.props.changeStatus(this.props.identificator, this.state.checked);
    }
    componentWillMount() {
        this.setState(() => ({
             checked: this.props.task.status == 1 ? true : false
        }));
    }
    render() {
        return (
            <Paper className='task_form' elevation={3}>
                <form action='' name='task_form' className='task_form'>
                    <div className='task_baseElements'>
                        <FormControlLabel
                            control = {
                                 <Checkbox
                                 checked={this.state.checked}
                                 onChange={this.updateCheck}
                                />
                            }
                            label = {this.props.task.title}
                            className='task_checkbox'
                        />
                        <IconButton
                            className='myBtn task_btn'
                            title='Edit Task'
                        >
                        <Edit />
                        </IconButton>
                        <IconButton
                            className='myBtn task_btn'
                            title='Delete Task'
                            color="primary"
                        >
                        <Delete />
                        </IconButton>
                    </div>
                    <p className='task_text' title={this.props.task.text}>{this.props.task.text}</p>
                </form>
            </Paper>
        );
    }
}