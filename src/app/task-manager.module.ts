import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TaskManagerComponent } from './task-manager.component';

@NgModule({
  declarations: [
    TaskManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TaskManagerComponent]
})
export class TaskManagerModule { }
