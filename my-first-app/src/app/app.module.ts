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
import { First3EmployeesComponent } from './components/first3-employees/first3-employees.component';
import { CountryComponent } from './components/country/country.component';
import { CityComponent } from './components/country/city/city.component';

@NgModule({
  declarations: [
    AppComponent,MessageComponent, JumbotronComponent, BadgeComponent, EmptableComponent, SentenceCasePipePipe, SearchPipe, First3EmployeesComponent, CountryComponent, CityComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
