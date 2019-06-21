import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesCollection: AngularFirestoreCollection<any>;
  categories: Observable<string[]>;

  constructor(private afs: AngularFirestore) {
    this.categoriesCollection = this.afs.collection('categories');
    this.categories = this.categoriesCollection.valueChanges();
    console.log('from cat service: ', this.categories);

   }

  masterCategoryList: string[] = [
    'home', 'onezero', 'elemental', 'gen', 'startups', 'self', 'tech', 'heated', 'zora', 'design', 'culture', 'human parts', 'more'
  ];

  getMasterCategories() {
    return this.masterCategoryList;
  }

  getFScats() {
    return this.categories;
  }
}
