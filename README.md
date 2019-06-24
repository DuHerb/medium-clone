# MediumClone

## Author: Dustin Herboldshimer

## Version 0.0.2
###Updated: 6/23/2019

This is a clone of the popular news/blog site, Medium.com, generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## View Site on Firebase

<a href='https://mediumclone-e91ae.firebaseapp.com/Medium'>https://mediumclone-e91ae.firebaseapp.com/Medium</a>

## Local Server Instructions:

1. FireBase Setup
    - Login to an existin Firebase account, or create a new one
    - Create a new project.
    - Create a database for new project.  IMPORTANT: FIRESTORE database required.
    - Under project settings, save your new project credintials, 'firebaseConfig'
2. Local Setup
    - Clone repo into a local directory from https://github.com/DuHerb/medium-clone
    - [your-clone]$ npm install
    - If not there, create your environment.ts and environment.prod.ts files.  They should look like the following, but with your own firebase project credintials
      - src/app/environment/environment.ts
        export const environment = {
          production: false,
          firebase: {
            apiKey: '[your key here]',
            authDomain: '...',
            databaseURL: 'https://mediumclone-e91ae.firebaseio.com',
            projectId: 'mediumclone-......',
            storageBucket: '',
            messagingSenderId: '....',
            appId: '......'
          }
        };

      -src/app/environment/environment.prod.ts
      export const environment = {
        production: true,
          firebase: {
            apiKey: '[your key here]',
            authDomain: '...',
            databaseURL: 'https://mediumclone-e91ae.firebaseio.com',
            projectId: 'mediumclone-......',
            storageBucket: '',
            messagingSenderId: '....',
            appId: '......'
          }
      };

      -IMPORTANT: your config variable name, ('firebaseConfig' is the firebase default, 'firebase' in the above example), must match the path name found in the AngularFireModule.initializeApp command in the app.module.ts imports array.  I.E. AngularFireModule.initializeApp(environment.firebase)

    - [your clone]$ ng serve
    - open your browser to localhost:4200 (unless otherwise directed in CLI)

## Project Goals

1 Medium.com Front Page - Complete Copy
  - cloned site should be almost visually identicle
  - working nav bar that routes to a collection of articles in the selected category
  - featured HERO article section that filters through 'featured' articles, selected by an admin(see below)
  - main content section featuring article list and an aside
2 Admin Dashboard Component
  - non-gated component where new articles may be written, and all articles may be edited with new tags, or featured status.
3 Article View Component
  - all article cards link to a Full View component
  - article view looks and functions like Medium.Com article

Stretch Goals:
- Article Responese Component
- Sub Magazine/ Category Components (some Medium categories have uniqe collection pages/sub home pages)
- Clap System

## Current State
1. Front Page
   - Top nav and hero section styling, complete. Center hero section (small-cards) is recieving articles from firestore.
   - Main content compononent (left section of content below hero) is styled and html is written.
   - Main content section currently displays data pulled from firebase.  Output was used to test different ways of rendering observable data in html.
   - TODO:
     - Write function to query articles for left and right hero panels (large and medium cards)
     - Build modules and link to categroy indexes via top navbar items
     - Create query for FEATURED article link
     - Complete FP-main-content.ts, firestore queries, and display articles on FP-main-content.html
     - Build main content aside component
2. Admin Dashboard
   - Link is active
   - Articles can be built and submitted to firestore database
   - TODO:
     - Style admin component
     - Add edit-article functionality
     - Add functionality to better control placement of articles in hero sections
3. Article View Component
   - No progress made

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Known Bugs:

### Support and contact details

Contact Dustin Herboldshimer at dustnpdx@gmail.com

## Technologies Used

#### Angular 8.0.2

### License

Protected under the <a href="https://opensource.org/licenses/MIT">MIT License</a>

Copyright (c) 2019 **Dustin Herboldshimer**

