import { NewStudentM1Models } from './../../models/new-student-m1-models';
import { Router } from '@angular/router';
import { HttpClientModule, HttpEventType } from '@angular/common/http';
import { NewStudentM1Service } from './../../services/new-student-m1-services/new-student-m1.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-new-student-m1',
  templateUrl: './new-student-m1.component.html',
  styleUrls: ['./new-student-m1.component.css']
})

export class NewStudentM1Component implements OnInit {

  prename = ['','นาย','นางสาว'];
  gender = ['','ชาย','หญิง'];
  public respones: {dbPath: ''}
  public pic ;


  constructor(
    public nm1s: NewStudentM1Service,
    public router: Router,
    private http: HttpClientModule,) { }

    ngOnInit(): void{}

  addNewstudentm1(newstudentm1){
    this.nm1s.addNewstudentm1(newstudentm1);
  }

  public onCreate = () => {
    picPath: this.respones.dbPath;
  }

  public uploadFinished = (event) =>{
    this.respones.dbPath = event;
  }




}






