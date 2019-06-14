import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/Medium', pathMatch: 'full'},
  { path: 'Medium', component: FrontPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
