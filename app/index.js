import 'babel-polyfill';
import 'babel-plugin-transform-class-properties';
import React from 'react';
import ReactDOM from 'react-dom';
import './sass/base.scss';
import App from './js/app.jsx';

ReactDOM.render(<App />, document.getElementById('container'));