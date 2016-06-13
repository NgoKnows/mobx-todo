import React, { Component } from 'react';

import TodoStore from './stores/TodoStore';
import TodoApp from './components/TodoApp';

export default class App extends Component {
    static defaultProps = {};
    props: {};
    state: void;

    render() {
        const { } = this.props;

        return (
            <div style={STYLES}>
                <TodoApp store={TodoStore} />
            </div>
        );
    }
}

const STYLES = {
    fontFamily: 'Lato',
    padding: 50,
    backgroundColor: 'white'
};
