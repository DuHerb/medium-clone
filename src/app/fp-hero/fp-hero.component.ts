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

  ngOnInit() {
  }

}
