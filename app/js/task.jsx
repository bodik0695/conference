import React from 'react';
import {FlatButton} from 'material-ui';
import {IconButton} from 'material-ui';
import {Checkbox} from 'material-ui';
import {SvgIcon} from 'material-ui';
import EditIcon from './editIcon.jsx';
import DelIcon from './delIcon.jsx';
import {Paper} from 'material-ui';

export default class Task extends React.Component{
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
        this.setState(() => {
            return {
                checked: this.props.task.status == 1 ? true : false
            }
        });
    }
    render() {
        return (
            <Paper className='task_form' zDepth={2} rounded={false}>
                <form action='' name='task_form' className='task_form'>
                    <div className='task_baseElements'>
                        <Checkbox
                            label={this.props.task.title}
                            checked={this.state.checked}
                            onCheck={this.updateCheck}
                            className='task_checkbox'
                        />
                        <IconButton
                            className='myBtn task_btn'
                            title='Edit Task'
                        >
                            <EditIcon 
                                color='#FFF'
                                className='task_btnIcon'
                            />
                        </IconButton>
                        <IconButton
                            className='myBtn task_btn'
                            title='Delete Task'
                        >
                            <DelIcon 
                                color='#FFF'
                                className='task_btnIcon'
                            />
                        </IconButton>
                    </div>
                    <p className='task_text' title={this.props.task.text}>{this.props.task.text}</p>
                </form>
            </Paper>
        );
    }
}