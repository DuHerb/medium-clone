import { Component, OnInit } from '@angular/core';
import { Article } from './../article.model';
import { ArticleService } from './../article.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-fp-hero',
  templateUrl: './fp-hero.component.html',
  styleUrls: ['./fp-hero.component.css']
})
export class FpHeroComponent implements OnInit {

  constructor(private artService: ArticleService) { }

  articles: Observable<any[]>;
  featuredArticles: Article[];

  // made redundant by getFeaturedArticles() - remove and test before finishing
  getArticles(): void {
    this.articles = this.artService.getFSarticles();
  }

  getFeaturedArticles(): void {
    this.featuredArticles = this.artService.getFeaturedArticles();
  }

  getUrl(article: Article) {
    return article.imgUrl;
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
    this.addFeaturedArticles(2, 'life');
    this.addFeaturedArticles(3, 'tech');
    this.getFeaturedArticles();
  }

}
