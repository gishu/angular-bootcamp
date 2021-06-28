import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HandMadeComponent } from './handmade/handmade.component';
import { CliComponent } from './cli/cli.component';

@NgModule({
  declarations: [
    AppComponent,
    HandMadeComponent,
    CliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
