import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    TaskManagerComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [TaskManagerComponent],
})
export class TaskManagerModule {}
