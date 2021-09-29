import { IndexComponent } from './components/index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { NewStudentM4Component } from './components/new-student-m4/new-student-m4.component';
import { SortNewstudentComponent } from './components/sort-newstudent/sort-newstudent.component';
import { CheckStudentLineComponent } from './components/check-student-line/check-student-line.component';
import { BehaviorStudentComponent } from './components/behavior-student/behavior-student.component';
import { BehaviorTeacherComponent } from './components/behavior-teacher/behavior-teacher.component';
import { CheckStudentRoomComponent } from './components/check-student-room/check-student-room.component';
import { EditComponent } from './components/edit/edit.component';
import { NewStudentM1Component } from "src/app/components/new-student-m1/new-student-m1.component";
import { SortNewstudentM4Component } from './components/sort-newstudent-m4/sort-newstudent-m4.component';
import { StudentCoreInformationComponent } from './components/student-core-information/student-core-information.component';
import { ShowStudentByIdComponent } from './components/show-student-by-id/show-student-by-id.component';
import { StatusStudentComponent } from './components/status-student/status-student.component';
import { FixProfileStudentComponent } from './components/fix-profile-student/fix-profile-student.component';
import { AddBehaviorComponent } from './components/add-behavior/add-behavior.component';
import { MainBehaviorComponent } from './components/main-behavior/main-behavior.component';
import { AddStudentCoreComponent } from './components/add-student-core/add-student-core.component';
import { TestComponent } from './components/test/test.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { LoginTeacherComponent } from './components/login-teacher/login-teacher.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AdminPageCommunicateComponent } from './components/admin-page-communicate/admin-page-communicate.component';
import { MainNewstudentComponent } from './components/main-newstudent/main-newstudent.component';
import { MainStudyComponent } from './components/main-study/main-study.component';
import { TestUIComponent } from './components/test-ui/test-ui.component';



const routes: Routes = [
  {path: '' ,redirectTo: '/index',pathMatch:'full'},
  {path: 'index',component:IndexComponent},
  {path: 'mainpage',component:MainpageComponent},
  {path: 'NewStudentRegisterM1',component:NewStudentM1Component},
  {path: 'NewStudentRegisterM4',component:NewStudentM4Component},
  {path: 'SortNewstudentm1',component:SortNewstudentComponent},
  {path: 'CheckStudentLine',component:CheckStudentLineComponent},
  {path: 'CheckStudentRoom',component:CheckStudentRoomComponent},
  {path: 'BehaviorStudent',component:BehaviorStudentComponent},
  {path: 'BehaviorTeacher',component:BehaviorTeacherComponent},
  {path: 'Edit',component:EditComponent},
  {path: 'SortNewstudentM4',component:SortNewstudentM4Component},
  {path: 'StudentCoreInformation', component: StudentCoreInformationComponent},
  {path: 'Showstudentbyid/:id' , component: ShowStudentByIdComponent},
  {path: 'Statusstudent/:student_id' , component: StatusStudentComponent},
  {path: 'Fixprofilestudent/:id' , component: FixProfileStudentComponent},
  {path: 'Mainbehavior' , component:MainBehaviorComponent},
  {path: 'Addbehavior' , component:AddBehaviorComponent},
  {path: 'Addstudentcore' , component:AddStudentCoreComponent},
  {path: 'Test' , component:TestComponent},
  {path: 'LoginStudent' , component:LoginStudentComponent},
  {path: 'LoginTeacher' , component:LoginTeacherComponent},
  {path: 'LoginAdmin' , component:LoginAdminComponent},
  {path: 'AdminPage' , component:AdminPageComponent},
  {path: 'AdminPageCommunicate' , component:AdminPageCommunicateComponent},
  {path: 'MainNewStudent' , component:MainNewstudentComponent},
  {path: 'MainStudy' , component:MainStudyComponent},
  {path: 'TestUI' , component:TestUIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
