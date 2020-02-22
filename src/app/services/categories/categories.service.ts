import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Category } from '../../models/category/category'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public categories: Category[];
  private categoriesRoute = "http://localhost:3000/categories";

  constructor(private http: HttpClient) { 

   }

  getCategories() {
    this.http.get<Category[]>(this.categoriesRoute).subscribe(data => this.categories = data);
  }
}
