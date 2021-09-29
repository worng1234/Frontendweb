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
import { UploadPicComponent } from './components/upload-pic/upload-pic.component';
import { StudentCoreInformationComponent } from './components/student-core-information/student-core-information.component';
import { ShowStudentByIdComponent } from './components/show-student-by-id/show-student-by-id.component';
import { StatusStudentComponent } from './components/status-student/status-student.component';
import { FixProfileStudentComponent } from './components/fix-profile-student/fix-profile-student.component';
import { MainBehaviorComponent } from './components/main-behavior/main-behavior.component';
import { AddBehaviorComponent } from './components/add-behavior/add-behavior.component';
import { AddStudentCoreComponent } from './components/add-student-core/add-student-core.component';
import { IndexComponent } from './components/index/index.component';
import { TestComponent } from './components/test/test.component';
import { SortNewstudentM4Component } from './components/sort-newstudent-m4/sort-newstudent-m4.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { LoginTeacherComponent } from './components/login-teacher/login-teacher.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AdminPageCommunicateComponent } from './components/admin-page-communicate/admin-page-communicate.component';
import { MainNewstudentComponent } from './components/main-newstudent/main-newstudent.component';
import { MainStudyComponent } from './components/main-study/main-study.component';

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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { LoginTeacherComponent } from './components/login-teacher/login-teacher.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AdminPageCommunicateComponent } from './components/admin-page-communicate/admin-page-communicate.component';
import { MainNewstudentComponent } from './components/main-newstudent/main-newstudent.component';
import { MainStudyComponent } from './components/main-study/main-study.component';
import { TestUIComponent } from './components/test-ui/test-ui.component';

=======
import { NewStudentM1IdComponent } from './components/new-student-m1-id/new-student-m1-id.component';
>>>>>>> 50d6140d4be12078a3a4aeb34b0222c78e15bbff






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
    MainBehaviorComponent,
    AddBehaviorComponent,
    AddStudentCoreComponent,
    IndexComponent,
    TestComponent,
    LoginStudentComponent,
    LoginTeacherComponent,
    LoginAdminComponent,
    AdminPageComponent,
    AdminPageCommunicateComponent,
    MainNewstudentComponent,
    MainStudyComponent,
<<<<<<< HEAD
    TestUIComponent,
=======
    NewStudentM1IdComponent,
>>>>>>> 50d6140d4be12078a3a4aeb34b0222c78e15bbff

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,

  ],
  providers: [NewStudentM1Service,SortNewstudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
