import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Category } from '../../models/category/category';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/models/task/task';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category:Category
  @Output() categoryDeleted: EventEmitter<Number> = new EventEmitter();
  private tasksRoute = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  addTask(values) {
    values.tasks = []
    this.http.post(this.tasksRoute, values).subscribe(data => this.getTasks())
  }

  getTasks() {
    this.http.get<Task[]>(this.tasksRoute).subscribe(data => this.category.tasks = data)
  }

  onClickDelete() {
    this.categoryDeleted.emit(this.category.id);
  }

  onTaskDeleted(event) {
    this.http.delete(this.tasksRoute+this.category.id+".tasks."+event).subscribe(response => this.getTasks())
  }

}
