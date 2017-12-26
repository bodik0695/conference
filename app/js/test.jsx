import React from 'react';
import ReactDOM from 'react-dom';

export default function test() {
    const list = (
        <ul id="front-end">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
        </ul>);

    const title = (<h1 id="title">Hello World!</h1>);

    ReactDOM.render(
        title,
        document.getElementById('div1')
    );
    ReactDOM.render(
        list,
        document.getElementById('div2')
    );
}