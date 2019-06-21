import { Injectable } from '@angular/core';
import { Article } from './../app/article.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  idCounter = 0;
  masterArticles: Article[] = [];

  private articlesCollection: AngularFirestoreCollection<Article>;
  articles: Observable<Article[]>;

  constructor(private afs: AngularFirestore) {
    this.articlesCollection = this.afs.collection<Article>('articles');
    this.articles = this.articlesCollection.valueChanges();
  }

  getFSarticles(): Observable<Article[]> {
    return this.articles;
  }

  getArticles(): Article[] {
    return this.masterArticles;
  }

  clearArticles(): void {
    this.masterArticles = [];
  }

  // add a given number of mock articles in a specified categotry to this.masterArticles array
  addArticles(articlesRequested: number, category: string): void {
    for (let i = 0; i < articlesRequested; i++) {
      const newArticle = this.buildMockArticle();
      newArticle.category = category;
      this.masterArticles.push(newArticle);
    }
  }

  // add a given number of mock articles in a specified category, designated as featured, to this.masterArticles array
  addFeaturedArticles(articlesRequested: number, category: string) {
    for (let i = 0; i < articlesRequested; i++) {
      const newArticle = this.buildMockArticle();
      newArticle.category = category;
      newArticle.isFeatured = true;
      this.masterArticles.push(newArticle);
    }
  }

  getFeaturedArticles(): Article[] {
    return this.masterArticles.filter(article => article.isFeatured);
  }

  // mock article template
  buildMockArticle(): Article {
    const title = 'This is a mock title';
    const author = 'nick mars';
    const tagline = 'this is a mock tagline from firebase';
    const readtime = '6';
    const featured = false;
    const category = 'mock';
// tslint:disable-next-line: max-line-length
    const body = 'Elit laborum qui elit ut aliqua et qui magna labore elit. Ad sint eu minim fugiat aute quis voluptate aute consequat deserunt consequat deserunt irure esse. Sit consectetur qui voluptate qui tempor dolore ut aliqua.';

    const newArticle = new Article(title, tagline, author, category, body, readtime, featured);
    newArticle.id = this.idCounter;
    this.idCounter++;
    newArticle.imgUrl = './../assets/img/seedImage.jpeg';
    newArticle.pubDate = 'June 14';
    newArticle.tags = [];
    newArticle.claps = 0;

    return newArticle;
  }


}
