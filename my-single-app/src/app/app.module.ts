import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';

const appRoutes: Routes = [
  { path: 'add', component:  AddComponent},
  { path: 'view',      component: ViewComponent },
  { path: 'update',      component: UpdateComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
