import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { DumbCounterComponent } from './components/dumb-counter/dumb-counter.component';

@NgModule({
  declarations: [
    // components
    AppComponent,
    MastheadComponent,
    DumbCounterComponent,
  ],
  imports: [
    // use these other modules
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent], // root level module has this.
})
export class AppModule {}
