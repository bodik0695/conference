import React from 'react';
import {TextField} from 'material-ui/';

export default class Title extends React.PureComponent{ 
  render() {
    console.log(this.props.title);
      return (
        <input id="newTitle" type="text" className ="newTaskForm_title" placeholder="Task Title" 
        value={this.props.title} onChange={this.props.onChangeTitle} />
      )
  }
}