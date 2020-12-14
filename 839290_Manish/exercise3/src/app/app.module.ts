import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentCounterComponent } from './parent-counter/parent-counter.component';
import { ChildCounterComponent } from './child-counter/child-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentCounterComponent,
    ChildCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
