//components
import { NewStudentM1Component } from './components/new-student-m1/new-student-m1.component';
import { NewStudentM4Component } from './components/new-student-m4/new-student-m4.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SortNewstudentComponent } from './components/sort-newstudent/sort-newstudent.component';
import { CheckStudentLineComponent } from './components/check-student-line/check-student-line.component';
import { CheckStudentRoomComponent } from './components/check-student-room/check-student-room.component';
import { BehaviorTeacherComponent } from './components/behavior-teacher/behavior-teacher.component';
import { BehaviorStudentComponent } from './components/behavior-student/behavior-student.component';

//services
import { NewStudentM1Service } from './services/new-student-m1-services/new-student-m1.service';

//module
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    NewStudentM1Component,
    NewStudentM4Component,
    NavBarComponent,
    MainpageComponent,
    SortNewstudentComponent,
    CheckStudentLineComponent,
    CheckStudentRoomComponent,
    BehaviorTeacherComponent,
    BehaviorStudentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NewStudentM1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
