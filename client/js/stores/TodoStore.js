import { observable, action } from 'mobx';
import Todo from '../models/Todo';

class TodoStore {
    @observable todos = [];
    @observable inputValue = '';

    @action
    addTodo() {
        this.todos.push(new Todo({
            text: this.inputValue,
            completed: false
        }));

        this.inputValue = '';
    }

    @action
    removeTodo(index) {
        this.todos.splice(index, 1);
    }

    @action
    toggleTodo(index) {
        this.todos[index].completed = !this.todos[index].completed;
    }
}

export default new TodoStore();
