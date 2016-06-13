import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Todo from './Todo';
import Input from './Input';

@observer
export default class TodoApp extends Component {
    static defaultProps = {};
    props: {};
    state: void;

    render() {
        const { store } = this.props;

        return (
            <div style={STYLES.container}>
                <h1 style={STYLES.title}>MobX Todo App!</h1>
                <Input
                    handleChange={(e) => store.inputValue = e.target.value}
                    handleKeyUp={(e) => e.key === 'Enter' ? store.addTodo() : ''}
                    placeholder="What do you need to do?"
                    value={store.inputValue}
                />
                {store.todos.map((todo, index) =>
                    <Todo
                        key={index}
                        todo={todo}
                        toggleTodo={() => store.toggleTodo(index)}
                        removeTodo={() => store.removeTodo(index)}
                    />
                )}
            </div>
        );
    }
}

const STYLES = {
    container : {
        alignItems    : 'center',
        boxSizing     : 'border-box',
        display       : 'flex',
        flexDirection : 'column',
        padding       : '16px',
    },

    title : {
        margin         : '12px',
        textDecoration : 'underline',
        fontSize: 36
    }
}
