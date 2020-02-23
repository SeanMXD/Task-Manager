import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/task/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClickDelete() {
    this.taskDeleted.emit(this.task.id);
  }

}
