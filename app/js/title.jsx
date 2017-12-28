import React from 'react';

export default class Title extends React.Component{
  render() {
      return (
        <input id="newTitle" type="text" className ="newTaskForm_title" placeholder="Task Title" 
        value={this.state.title} onChange={this.onChangeTitle.bind(this)}/>
      )
  }
}