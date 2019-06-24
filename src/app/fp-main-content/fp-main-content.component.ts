import { Component, OnInit } from '@angular/core';
import { Article } from './../article.model';

@Component({
  selector: 'app-fp-main-content',
  templateUrl: './fp-main-content.component.html',
  styleUrls: ['./fp-main-content.component.css']
})
export class FpMainContentComponent implements OnInit {

  article: Article;
  featuredArticles: Article[];

  constructor() { }

  getUrl(article: Article) {
    return article.imgUrl;
  }

  ngOnInit() {
  }

}
