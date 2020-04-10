import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {MessageComponent} from './message.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { BadgeComponent } from './components/badge/badge.component';
import { EmptableComponent } from './components/emptable/emptable.component';
import { SentenceCasePipePipe } from './pipes/sentence-case-pipe.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,MessageComponent, JumbotronComponent, BadgeComponent, EmptableComponent, SentenceCasePipePipe, SearchPipe
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
