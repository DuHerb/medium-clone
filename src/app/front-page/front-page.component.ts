import { Component, OnInit, HostListener } from '@angular/core';
import { CategoryService } from './../category.service';
import { ArticleService } from '../article.service';
import { Article } from '../article.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  categoryList: string[];
  articles: Article[];
  items: Observable<any[]>;

  constructor( private catService: CategoryService, private artService: ArticleService, private db: AngularFirestore) {
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

   getDB(): void {
     this.items = this.artService.getFSarticles();
   }

  ngOnInit() {
    this.getMasterCats();
    this.addArticles(2, 'heated');
    this.addArticles(1, 'self');
    this.getArticles();
    this.getDB();
  }

  // listen for scroll event to trigger sticky nav bar
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 65) {
       const element = document.getElementById('stickyNav');
       element.classList.add('stuck');
       console.log('offset');
     } else {
      const element = document.getElementById('stickyNav');
      element.classList.remove('stuck');
      console.log('not offset');
     }
  }

}

