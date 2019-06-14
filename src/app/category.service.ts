import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  masterCategoryList: string[] = [
    'home', 'onezero', 'elemental', 'gen', 'startups', 'self', 'tech', 'heated', 'zora', 'design', 'culture', 'human parts', 'more'
  ];

  getMasterCategories() {
    return this.masterCategoryList;
  }
}
