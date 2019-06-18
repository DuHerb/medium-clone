import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { FpHeroComponent } from './fp-hero/fp-hero.component';
import { FpHeroSmallComponent } from './fp-hero-small/fp-hero-small.component';
import { FpMainContentComponent } from './fp-main-content/fp-main-content.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    FpHeroComponent,
    FpHeroSmallComponent,
    FpMainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
