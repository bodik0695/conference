import React from 'react';
import { Fragment } from 'react';

import Task from './task.jsx';

export default class TaskWrapper extends React.PureComponent{
    render() {
        return this.props.children.map(child => React.cloneElement(child, {
                className: '-bgRed'
            })
        );
    }
}