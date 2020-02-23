import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category/category';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  public categories: Category[];
  private categoriesRoute: string = "http://localhost:3000/categories/";
  public formGroup;
  public newCategory = new Category;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) {
      this.formGroup = this.formBuilder.group({name: '', tasks: null, id: null})
    }
    
  addCategory(values) {
    values.tasks = []
    this.http.post(this.categoriesRoute, values).subscribe(data => this.getCategories())
  }

  ngOnInit() {
    this.getCategories()
  }

  getCategories() {
    this.http.get<Category[]>(this.categoriesRoute).subscribe(data => this.categories = data)
  }


  onCategoryDeleted(event) {
    this.http.delete(this.categoriesRoute+event).subscribe(response => this.getCategories())
  }
}
