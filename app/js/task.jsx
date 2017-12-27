import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    constructor(props) {
        super(props);
         this.state = {};
    }

    componentDidMount() {
        this.setState({ name: 'Vasy1'});
        this.setState((prevState, props) => ({
            name: prevState.name === 'Vasy' ? `${prevState.name} Pety` : prevState.name
         }));
        console.dir(this);
        console.log(2, this.state);
        console.log(3, this.state.name); // ?
    }

    render() {
        console.log(0, this.state.name); // ?
        return <h1>Hello {this.state.name}</h1>;
    }
 };

 ReactDOM.render(
    <Hello name='World' />,
    document.getElementById('container')
  );