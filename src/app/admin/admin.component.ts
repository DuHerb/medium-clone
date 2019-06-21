import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article.model';
import { ParsedEventType } from '@angular/compiler';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private artService: ArticleService) { }

  submitNewArticle(title: string, author: string, tagline: string, isFeatured: boolean, category: string, readtime: string, body: string) {
    const newArticle = new Article(title, tagline, author, category, body, readtime, isFeatured);
    console.log(newArticle);
  }

  ngOnInit() {
  }

}
