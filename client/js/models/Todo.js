import { observable } from 'mobx';

export default class Todo {
    @observable completed = false;
    @observable text = '';

    constructor({ completed, text }) {
        this.completed = completed;
        this.text = text;
    }
}
