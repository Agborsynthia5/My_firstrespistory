import { Component, signal } from '@angular/core';
import { AddItem } from './add-item/add-item';
import { TodoList } from './todo-list/todo-list';

@Component({
  imports: [AddItem, TodoList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-angular-app');

  todos: string[] = [];

  addTodo(newTodo: string) {
    if (newTodo) {
    this.todos.push(newTodo);
    console.log(this.todos);
   }
  }

}
