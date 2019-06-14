import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from './../category.service';
import { ArticleService } from '../article.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  // @Input() categoryList: string[];
  categoryList: string[];
  articles: Article[];


  constructor( private catService: CategoryService, private artService: ArticleService) {
   }

   // retieve array of categories for menu display
   getMasterCats(): void {
      this.categoryList = this.catService.getMasterCategories();
   }

   // retrieve articles from ArticleService
   getArticles(): void {
     this.articles = this.artService.getArticles();
   }

  // create mock articles to put in template sections
   addArticles(articlesRequested: number, category: string): void {
     this.artService.addArticles(articlesRequested, category);
   }

  ngOnInit() {
    this.getMasterCats();
    this.addArticles(3, 'tech');
    this.addArticles(2, 'heated');
    this.addArticles(1, 'self');
    this.getArticles();
  }

}

