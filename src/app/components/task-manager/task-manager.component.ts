import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category/category';

import { CategoriesService } from '../../services/categories/categories.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  public categories: Category[];
  
  private categoriesDataService: CategoriesService;

  constructor(private categoriesService: CategoriesService){
    this.categoriesDataService = categoriesService;
  }

  ngOnInit() {
    this.categories = this.categoriesDataService.categories;
  }
}
