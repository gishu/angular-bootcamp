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

`ng g[enerate] c[component] <name>`

## View Encapsulation
By default, Components have ViewEncapsulation.Emulated. This applies a unique attribute to each component. e.g. _ngcontent-wpo-c12 and any styles are modified to include this attribute e.g. `p[_ngcontent-wpo-c12]` so the styles only apply within this component.

If you apply ViewEncapsulation.None to a component, then the styles will leak to other components as well. Usually not desirable.

## Content projection
you can project content into a custom component with the ng-content directive