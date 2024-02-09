import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(public todoSrvc:TodoService){
   
  }
  todos:string=""

  addTodo(){
    this.todoSrvc.allTodo.push(this.todos)
    this.todos=""
  }
}
