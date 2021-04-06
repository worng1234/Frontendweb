import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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


const routes: Routes = [
  //{path:'Mainpage',component:MainpageComponent,pathMatch:'full'},
  {path:'Newstudentm1',component:NewStudentM1Component,pathMatch:'full'},
  {path:'NewStudentRegisterM4',component:NewStudentM4Component},
  {path:'SortNewstudent',component:SortNewstudentComponent},
  {path:'CheckStudentLine',component:CheckStudentLineComponent},
  {path:'CheckStudentRoom',component:CheckStudentRoomComponent},
  {path:'BehaviorStudent',component:BehaviorStudentComponent},
  {path:'BehaviorTeacher',component:BehaviorTeacherComponent},
  {path:'Edit',component:EditComponent},
  {path:'SortNewstudentM4',component:SortNewstudentM4Component},
  {path:'StudentCoreInformation',component:StudentCoreInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
