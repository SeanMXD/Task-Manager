import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { CategoryComponent } from './components/category/category.component';
import { TaskComponent } from './components/task/task.component';


import { Observable } from 'rxjs';
import { CategoriesService } from './services/categories/categories.service';

@NgModule({
  declarations: [
    TaskManagerComponent,
    CategoryComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [TaskManagerComponent]
})
export class TaskManagerModule {}
