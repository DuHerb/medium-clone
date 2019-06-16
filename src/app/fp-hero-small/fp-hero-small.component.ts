import { Component, OnInit, Input } from '@angular/core';
import { Article } from './../article.model';

@Component({
  selector: 'app-fp-hero-small',
  templateUrl: './fp-hero-small.component.html',
  styleUrls: ['./fp-hero-small.component.css']
})
export class FpHeroSmallComponent implements OnInit {
@Input() featuredArticles: Article[];

  smallArticles: Article[];
  constructor() { }

  pullArticles(): void {

    this.smallArticles = this.featuredArticles.slice(1, 4);
  }

  ngOnInit() {
    this.pullArticles();
  }

}
