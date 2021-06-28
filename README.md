- [Angular 8 Bootcamp](#NgBootcamp)
  - [Bootstrap](#bootstrap)
  - [Components](#components)


# NgBootcamp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Bootstrap

## Create the project
`ng new [projectName] --directory [dir] [--dry-run] [--minimal]`


How it boots up:

* index.html pulls in main.js
  * main.ts has the code to bootstrap the main Module - AppModule
    * AppModule specifies the bootstrap Component = AppComponent
      * The <app-root> selector in index.html is replaced with the template of the AppComponent
  * styles.css is included in ; contains application wide styles 

## 01-Components
Checkout this branch 
- create components by hand or via cli

## 02-Databinding
- string interpolation
- event binding
- property binding
- data binding