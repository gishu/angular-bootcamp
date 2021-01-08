- [Angular 8 Bootcamp](#angular-8-bootcamp)
  - [Bootstrap](#bootstrap)
  - [Components](#components)

# Angular 8 Bootcamp

## Bootstrap

```
ng new --minimal --dry-run --skip-tests [project-name]
ng serve
```

To get Angular rolling, 

* index.html has 
  * main.ts ( -> main.js ) script injected which has the code to bootstrap 
    * AppModule, which has 
      * AppComponent set as the bootstrap component. 

The server serves src/index.html, which has an app-root tag. This tag is the selector for the src/app/app.component.ts default component, whose HTML template replaces the tag.

## Components

```js
ng g[enerate] c[component] folder/Name
```
This will create the 3 parts of a component, the HTML template, the styles file and the typescript code.
This will also update the declarations array of the Module.