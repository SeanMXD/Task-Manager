import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task/task';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  public tasks: Task[];
  private tasksRoute: string = "http://localhost:3000/tasks/";
  public formGroup;
  public newTask = new Task;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) {
      this.formGroup = this.formBuilder.group({description: '', id: null})
    }
    
  addTask(values) {
    this.http.post(this.tasksRoute, values).subscribe(data => this.getTasks())
  }

  ngOnInit() {
    this.getTasks()
  }

  getTasks() {
    this.http.get<Task[]>(this.tasksRoute).subscribe(data => this.tasks = data)
  }

  onTaskDeleted(event) {
    this.http.delete(this.tasksRoute+event).subscribe(response => this.getTasks())
  }
}
