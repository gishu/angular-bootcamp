import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './display/display.component';
import { LoggingService } from './logging.service';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    CounterComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoggingService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
