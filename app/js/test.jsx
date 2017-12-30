import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";


export default class Hello extends React.Component {
    constructor(props) {
       super(props);
       this.state = {name: "Tom"};
       setTimeout(
          () => this.setState({name: "Bob"}),
          3000
       );
    }
    render() {
       return <h1>Hello {this.state.name}</h1>;
    }
 };
 