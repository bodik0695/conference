import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


export default class Test extends React.Component {
    constructor(props) {
       super(props);
       this.state = {name: "Tom"};
       setTimeout(
          () => this.setState({name: "Bob"}),
          3000
       );
    }
    render() {
        console.log(this.props);
       return (
           <div>
               <h1>Hello {this.state.name}</h1>
                <Link to='/'>Home</Link>
           </div>
    );
    }
 };
 