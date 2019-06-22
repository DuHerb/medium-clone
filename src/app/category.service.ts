import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesCollection: AngularFirestoreCollection<any>;
  categories: Observable<string[]>;

  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.categoriesCollection = this.afs.collection('categories');
    this.categories = this.categoriesCollection.valueChanges();
    console.log('from cat service: ', this.categories);

    this.itemDoc = afs.doc<any>('categories/mdOs8rrOfJZwv1SdKGsC');
    this.item = this.itemDoc.valueChanges();
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

  getCats() {
    return this.item;
  }
}
