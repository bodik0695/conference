import React from 'react';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Modal from 'material-ui/Modal';
import { withStyles } from 'material-ui/styles';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import TaskForm from './taskForm.jsx';

const styles = theme => {

}

export default class MyModal extends React.PureComponent {
    
    render() {
        return (
            <Modal 
                open = {this.props.openModal}
            > 
                <Paper >
                    <TaskForm
                        newTask = {false}
                        editTask = {true}
                        onOpenCloseModal = {this.props.onOpenCloseModal}
                        onEditTask = {this.props.onEditTask}
                        editedTask = {this.props.editedTask}
                        title = {this.props.editedTask.title}
                        text = {this.props.editedTask.text}
                    />
                </Paper>
            </Modal>
        )
    }
};