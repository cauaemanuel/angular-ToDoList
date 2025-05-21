import { NgFor } from '@angular/common';
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
  imports: [RouterOutlet, FormsModule, NgFor],
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
}
