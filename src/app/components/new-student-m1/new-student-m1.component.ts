import { NewStudentM1Models } from './../../models/new-student-m1-models';
import { Router } from '@angular/router';
import { HttpClientModule, HttpEventType, HttpClient } from '@angular/common/http';
import { NewStudentM1Service } from './../../services/new-student-m1-services/new-student-m1.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, NgModel } from "@angular/forms";



@Component({
  selector: 'app-new-student-m1',
  templateUrl: './new-student-m1.component.html',
  styleUrls: ['./new-student-m1.component.css']
})

export class NewStudentM1Component implements OnInit {

  prename = ['','นาย','นางสาว'];
  gender = ['','ชาย','หญิง'];


  constructor(
    public nm1s: NewStudentM1Service,
    public router: Router,
    private http: HttpClient,) { }

    ngOnInit(): void{}
    selectedFile: File;

  addNewstudentm1(newstudentm1){
    this.nm1s.addNewstudentm1(newstudentm1);
  }

  onFileChanged(event){
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload = (files) =>{
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('https://localhost:44342/api/Upload', uploadData,{
      reportProgress: true,
      observe: 'events'
    })
    .subscribe(event => {
      console.log(event);
    });
  }

}






