import React, { Component } from 'react';

export default class App extends Component {
    static defaultProps = {};
    props: {};
    state: void;

    render() {
        const { } = this.props;

        return (
            <div style={STYLES}>
            </div>
        );
    }
}

const STYLES = {
    height: 1000,
    width: 1500,
    fontFamily: 'Lato',
    margin: 100
};
