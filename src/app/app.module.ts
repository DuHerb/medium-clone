import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { FpHeroComponent } from './fp-hero/fp-hero.component';
import { FpHeroSmallComponent } from './fp-hero-small/fp-hero-small.component';
import { FpMainContentComponent } from './fp-main-content/fp-main-content.component';

// import { AngularFireDatabase} from 'angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    FpHeroComponent,
    FpHeroSmallComponent,
    FpMainContentComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
