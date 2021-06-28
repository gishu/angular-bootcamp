# NgBootcamp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Bootcamp begins

## Create the project
`ng new [projectName] --directory [dir] [--dry-run] [--minimal]`


How it boots up:

* index.html pulls in main.js
  * main.ts has the code to bootstrap the main Module - AppModule
    * AppModule specifies the bootstrap Component = AppComponent
      * The <app-root> selector in index.html is replaced with the template of the AppComponent

# Components
- Markup an exported class with Component decorator. This has 3 attributes - the HTML template, the selector/tag, the styles. 
- template and styles can be inline or seperate files.
- Update the module's declarations attribute to include the new component class.