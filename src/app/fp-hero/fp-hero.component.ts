import { Component, OnInit } from '@angular/core';
import { Article } from './../article.model';
import { ArticleService } from './../article.service';
@Component({
  selector: 'app-fp-hero',
  templateUrl: './fp-hero.component.html',
  styleUrls: ['./fp-hero.component.css']
})
export class FpHeroComponent implements OnInit {

  constructor(private artService: ArticleService) { }

  articles: Article[];

  // retrieve articles from ArticleService
  getArticles(): void {
    this.articles = this.artService.getArticles();
  }

 // create mock articles to put in template sections
  addArticles(articlesRequested: number, category: string): void {
    this.artService.addArticles(articlesRequested, category);
  }
  // create featured articles to target in hero section
  addFeaturedArticles(articlesRequested: number, category: string) {
    this.artService.addFeaturedArticles(articlesRequested, category);
  }

  ngOnInit() {
    this.addArticles(2, 'heated');
    this.addArticles(1, 'self');
    this.addFeaturedArticles(2, 'life');
    this.addFeaturedArticles(3, 'tech');
    this.getArticles();
  }

}
