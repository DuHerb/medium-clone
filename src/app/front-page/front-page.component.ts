import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  @Input() categoryList: string[];
  constructor() { }

  ngOnInit() {
  }

}
