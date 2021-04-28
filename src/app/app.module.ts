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
import { EditComponent } from './components/edit/edit.component';

//services
import { NewStudentM1Service } from './services/new-student-m1-services/new-student-m1.service';
import { SortNewstudentService } from './services/sort-new-student-services/sort-newstudent.service';

//module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { SortNewstudentM4Component } from './components/sort-newstudent-m4/sort-newstudent-m4.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { UploadPicComponent } from './components/upload-pic/upload-pic.component';
import { StudentCoreInformationComponent } from './components/student-core-information/student-core-information.component';
import { ShowStudentByIdComponent } from './components/show-student-by-id/show-student-by-id.component';
import { StatusStudentComponent } from './components/status-student/status-student.component';
import { FixProfileStudentComponent } from './components/fix-profile-student/fix-profile-student.component';






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
    EditComponent,
    SortNewstudentM4Component,
    UploadPicComponent,
    StudentCoreInformationComponent,
    ShowStudentByIdComponent,
    StatusStudentComponent,
    FixProfileStudentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,


  ],
  providers: [NewStudentM1Service,SortNewstudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
