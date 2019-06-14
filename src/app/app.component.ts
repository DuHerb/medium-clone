import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Medium CLone';

  masterCategoryList: string[] = [
    'home', 'onezero', 'elemental', 'gen', 'startups', 'self', 'tech', 'heated', 'zora', 'design', 'culture', 'human parts', 'more'
  ];
}
