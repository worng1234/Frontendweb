import { NewStudentM1Service } from './../../services/new-student-m1-services/new-student-m1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-student-m1',
  templateUrl: './new-student-m1.component.html',
  styleUrls: ['./new-student-m1.component.css']
})
export class NewStudentM1Component implements OnInit {

  prename = ['นาย','นางสาว'];
  gender = ['ชาย','หญิง'];

  constructor( private nm1s: NewStudentM1Service) { }

  ngOnInit() {
  }
  addNewstudentm1(newstudentm1){
    this.nm1s.addNewstudentm1(newstudentm1);
  }



}


