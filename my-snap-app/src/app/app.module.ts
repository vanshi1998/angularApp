import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
import { AddComponent } from './components/add/add.component';

const appRoutes: Routes = [
  { path: 'add', component:  AddComponent},
  { path: 'view',      component: ViewComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
