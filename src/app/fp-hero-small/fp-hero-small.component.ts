import { Component, OnInit, Input } from '@angular/core';
import { Article } from './../article.model';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-fp-hero-small',
  templateUrl: './fp-hero-small.component.html',
  styleUrls: ['./fp-hero-small.component.css']
})

export class FpHeroSmallComponent implements OnInit {
@Input() featuredArticles: Article[];
@Input() articles: Observable<any[]>;

  smallArticles: Article[];
  afsArticles: Observable<any[]>;
  // articles: Observable<any[]>;
  constructor(private as: ArticleService) { }

  getSmallCardArticles(): void {
    this.smallArticles = this.featuredArticles.slice(1, 4);
  }

  // getSmallFScardArticles(): void {
  //   this.smallFSarticles = this.articles.slice(1, 4);
  // }

  getUrl(article: Article) {
    return article.imgUrl;
  }

  ngOnInit() {
    this.getSmallCardArticles();
    console.log('from front-page: ', this.articles);

    this.afsArticles = this.as.getFSarticles();
    console.log('from database: ', this.afsArticles);
  }

}
