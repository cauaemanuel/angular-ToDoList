import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   todoList: TodoItem[]=[];
   newTask: string = '';

   addTask():void{
    if(this.newTask.trim() !== ''){
      const newTodo: TodoItem = {
        id: Date.now(),
        title: this.newTask,
        completed: false
      };
      console.log(newTodo);
      this.todoList.push(newTodo);
      this.newTask = '';
    }
   }

   toggleCompleted(id: number): void {
    const todo = this.todoList.find(item => item.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }}

    deleteTask(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
    }
}
