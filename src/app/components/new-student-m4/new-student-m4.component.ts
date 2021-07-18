import { NewStudentM4Service } from './../../services/new-student-m4-services/new-student-m4.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NewStudentM4Models } from 'src/app/models/new-student-m4-models';

@Component({
  selector: 'app-new-student-m4',
  templateUrl: './new-student-m4.component.html',
  styleUrls: ['./new-student-m4.component.css']
})
export class NewStudentM4Component implements OnInit {

  prename = ['','นาย','นางสาว'];
  gender = ['','ชาย','หญิง'];
  major = ['','วิทยาศาสตร์-คณิตศาสตร์','ศิลป์-จีน','ศิลป์-คำนวณ',
          'คหกรรม','เกษตร','ปวช','ศิลป์-พละ','ศิลป์-วาด',
          'วิทยาศาสตร์-คอมพิวเตอร์','ศิลป์-ฝรั่งเศษ'];
  newstudentm4 = new NewStudentM4Models();

  constructor(
    public nm4s: NewStudentM4Service,
    public router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
  }

  addNewstudentm4(){
    this.nm4s.addNewstudentm4(this.newstudentm4).subscribe( res => {
      console.log(res);
    })

  }





}

