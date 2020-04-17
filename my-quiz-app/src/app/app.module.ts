import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { ViewQuizComponent } from './components/view-quiz/view-quiz.component';
import { ViewQuestionComponent } from './components/view-question/view-question.component';


const appRoutes: Routes = [
  { path: 'viewquiz', component:  ViewQuizComponent},
  { path: 'viewquestion', component:  ViewQuestionComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ViewQuizComponent,
    ViewQuestionComponent
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
