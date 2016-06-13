import { observable, computed, autorun, action } from 'mobx';

class TodoStore {
    @observable todos = [{ text: 'hi', completed: true }];
    @observable inputValue = '';

    @action
    addTodo() {
        this.todos.push({
            text: this.inputValue,
            completed: false
        });

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
