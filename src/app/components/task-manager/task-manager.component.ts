import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category/category';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/models/task/task';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  public categories: Category[];
  public newCategory = new Category;
  private categoriesRoute: string = "http://localhost:3000/categories";
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCategories()
  }

  getCategories() {
    this.http.get<Category[]>(this.categoriesRoute).subscribe(data => this.categories = data)
    console.log(this.categories)
  }

  addCategory(category: Category) {
    this.http.post(this.categoriesRoute, category).subscribe(data => this.getCategories())
  }
}
