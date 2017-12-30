import React from 'react';

export default class Text extends React.PureComponent{
  render() {
    console.log(this.props.text);
      return (
        <textarea id="newText" className="newTaskForm_text" placeholder="Task Text" 
        onChange={this.props.onChangeText} value={this.props.text}></textarea>
      )
  }
}