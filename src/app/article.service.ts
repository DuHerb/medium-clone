import { Injectable } from '@angular/core';
import { Article } from './../app/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }
  idCounter = 0;

  masterArticles: Article[] = [];

  getArticles(): Article[] {
    return this.masterArticles;
  }

  addArticles(articlesRequested: number, category: string): void {
    for (let i = 0; i < articlesRequested; i++) {
      const newArticle = this.buildMockArticle();
      newArticle.mainCategory = category;
      this.masterArticles.push(newArticle);
    }
  }

  buildMockArticle(): Article {
    const newArticle = new Article();
    newArticle.id = this.idCounter;
    this.idCounter++;
    newArticle.title = 'This is a sample title';
    newArticle.tagLine = 'catchy phrase goes here';
    newArticle.author = 'Nicholas Mars';
    newArticle.imgUrl = './../assets/img/seedImage.jpeg';
    newArticle.pubDate = 'June 14';
    newArticle.readLength = '5';
    newArticle.mainCategory = '';
    newArticle.tags = [];
    newArticle.claps = 0;
// tslint:disable-next-line: max-line-length
    newArticle.body = 'Elit laborum qui elit ut aliqua et qui magna labore elit. Ad sint eu minim fugiat aute quis voluptate aute consequat deserunt consequat deserunt irure esse. Sit consectetur qui voluptate qui tempor dolore ut aliqua.';

    return newArticle;
  }


}
