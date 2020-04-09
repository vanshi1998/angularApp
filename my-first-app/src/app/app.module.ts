import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {MessageComponent} from './message.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { BadgeComponent } from './components/badge/badge.component';
import { EmptableComponent } from './components/emptable/emptable.component';

@NgModule({
  declarations: [
    AppComponent,MessageComponent, JumbotronComponent, BadgeComponent, EmptableComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
