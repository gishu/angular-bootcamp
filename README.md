- [Angular 8 Bootcamp](#angular-8-bootcamp)
  - [Bootstrap](#bootstrap)
  - [Components](#components)
    - [4. Intercomponent communication](#4-intercomponent-communication)
  - [3 Data binding](#3-data-binding)
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

### 4. Intercomponent communication
Parent child communication
- Mark properties with Input() to pass in values
- Mark events with Output to emit values

Sibling component communication
- Bubble up to the parent
- Invoke child components via template variables / @ViewChild




## 3 Data binding
- String interpolation
- Property and Event binding
- 2-way ngModel databinding

## 4 Services
- Any class can serve as a service.
- Set providers array for angular to inject the service.
- Hierarchical Injector: setting providers at
  - AppModule level -> Singleton instance
  - Component level -> shared by component and its children