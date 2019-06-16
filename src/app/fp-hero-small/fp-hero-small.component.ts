import { Component, OnInit, Input } from '@angular/core';
import { Article } from './../article.model';

@Component({
  selector: 'app-fp-hero-small',
  templateUrl: './fp-hero-small.component.html',
  styleUrls: ['./fp-hero-small.component.css']
})
export class FpHeroSmallComponent implements OnInit {
@Input() heroSmallArticles: Article[];
  constructor() { }

  ngOnInit() {
  }

}
