import React from 'react';

export default class Text extends React.Component{
  render() {
      return (
        <textarea id="newText" className="newTaskForm_text" placeholder="Task Text" 
        onChange={this.onChangeText.bind(this)}>{this.state.text}</textarea>
      )
  }
}