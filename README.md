- [Angular Bootcamp](#angular-bootcamp)
  - [Development server](#development-server)
  - [Bootstrap](#bootstrap)
  - [01-Components](#01-components)
  - [02-Databinding](#02-databinding)
  - [03-Inter component communication](#03-inter-component-communication)
  - [04-Directives](#04-directives)
  - [05-Services](#05-services)


# Angular Bootcamp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Bootstrap

 Create the project with

`ng new [projectName] --directory [dir] [--dry-run] [--minimal]`


How it boots up:

* index.html pulls in main.js
  * main.ts has the code to bootstrap the main Module - AppModule
    * AppModule specifies the bootstrap Component = AppComponent
      * The <app-root> selector in index.html is replaced with the template of the AppComponent
  * styles.css is included in ; contains application wide styles 

## 01-Components
 
- create components by hand or via cli

- _View Encapsulation_

By default, Components have ViewEncapsulation.Emulated. This applies a unique attribute to each component. e.g. _ngcontent-wpo-c12 and any styles are modified to include this attribute e.g. `p[_ngcontent-wpo-c12]` so the styles only apply within this component.

If you apply ViewEncapsulation.None to a component, then the styles will leak to other components as well. Usually not desirable.

- _Content projection_

you can project content into a custom component with the ng-content directive

- _Lifecycle hooks_

## 02-Databinding
- string interpolation
- event binding
- property binding
- data binding

## 03-Inter component communication
Parent child communication
- Mark properties with Input() to pass in values
- Mark events with Output to emit values

Sibling component communication
- Bubble up to the parent
- Invoke child components via template variables / @ViewChild

Cross component comm via a shared service
- inject a shared service into publisher and subscriber components. The service has events of type _Subject&lt;args&gt'
- Publisher calls `Service.event.next(value)`
- Subscriber calls `Service.event.asObservable.subscribe(value => {})`

## 04-Directives
Structural directives start with a * => change the DOM structure 
- *ngIf for conditional inclusion. *ngFor to repeat a template n times
- ngStyles to apply styles to element dynamically, ngClass to apply classes dynamically
- create a custom directive
  - bind to host element's properties and events
  - customize with @Input properties

## 05-Services
Services generally offer functionality like calling APIs over HTTP etc. Components call services to get stuff done

_Instantiation_
- module level providers array : all components in the app will have the same instance injected
- component with children level : shared by this component and its children only
- component without children level : instance exclusively owned by this component only

@Injectable decorator only needed for services that need DI 

Services also offer another way to setup intercomponent communication via a shared service instance

