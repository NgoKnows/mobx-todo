import React, { Component, PropTypes } from 'react';
import Radium from 'radium'
import { observer } from 'mobx-react';

@Radium
@observer
export default class Todo extends Component {
    render() {
        const { todo, removeTodo, toggleTodo } = this.props;

        return (
            <div style={STYLES.todo}>
                <div style={STYLES.name}>
                    {this.renderCheckBox(todo.completed)}
                    <div style={STYLES.text(todo.completed)}>{todo.text}</div>
                </div>
                <i
                    className="fa fa-times"
                    style={STYLES.x}
                    onClick={removeTodo}
                />
            </div>
        );
    }

    renderCheckBox(completed) {
        const { toggleTodo } = this.props;

        if (completed) {
            return (
                <i
                    className="fa fa-check-circle-o"
                    style={[STYLES.checkbox, STYLES.selected]}
                    onClick={toggleTodo}
                />
            )
        } else {
            return (
                <i
                    className="fa fa-circle-o"
                    style={STYLES.checkbox}
                    onClick={toggleTodo}
                />
            )
        }
    }
}

const STYLES = {
    todo: {
        display        : 'flex',
        justifyContent : 'space-between',
        alignItems     : 'center',
        marginBottom   : '24px',
        width: '100%'
    },

    name : {
        display    : 'flex',
        alignItems : 'center'
    },

    text : (completed) => ({
        textDecoration: completed ? 'line-through' : '',
        lineHeight : '0',
        fontSize: 24
    }),

    x : {
        color      : 'red',
        fontSize   : '32px',
        marginLeft : '12px',
        cursor     : 'pointer'
    },

    checkbox : {
        fontSize    : '32px',
        color       : '#d3d3d3',
        marginRight : '20px',
        cursor      : 'pointer',
    },

    selected : {
        color   : '#28EDB6',
        opacity : 1
    }
};
