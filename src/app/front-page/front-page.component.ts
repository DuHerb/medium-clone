import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from './../category.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  // @Input() categoryList: string[];
  categoryList: string[];


  constructor( private service: CategoryService) {
   }

   getMasterCats(): void {
      this. categoryList = this.service.getMasterCategories();
   }

  ngOnInit() {
    this.getMasterCats();
  }

}

