import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ViewQuizComponent } from './components/view-quiz/view-quiz.component';
import { ViewQuestionComponent } from './components/view-question/view-question.component';
import { ViewResultComponent } from "src/app/components/view-result/view-result.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';*/
import {MatCardModule} from '@angular/material/card';
import { SearchPipe } from './pipes/search.pipe';
import {MatInputModule} from '@angular/material/input';

const appRoutes: Routes = [
  { path: 'viewquiz', component:  ViewQuizComponent},
  { path: 'viewquestion', component:  ViewQuestionComponent},
  { path: 'viewresult', component:  ViewResultComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    ViewQuizComponent,
    ViewQuestionComponent,
    ViewResultComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule, ReactiveFormsModule ,MatCardModule,MatInputModule,
    //MatSliderModule,MatProgressBarModule,MatInputModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
