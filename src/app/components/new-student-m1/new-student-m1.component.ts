import { NewStudentM1Models } from './../../models/new-student-m1-models';
import { Router } from '@angular/router';
import { HttpClientModule, HttpEventType, HttpClient } from '@angular/common/http';
import { NewStudentM1Service } from './../../services/new-student-m1-services/new-student-m1.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  public message: string;
  public progress: number;
  @Output() public onUploadFinished = new EventEmitter();


  constructor(
    public nm1s: NewStudentM1Service,
    public router: Router,
    private http: HttpClient,) { }

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

  public uploadFile = (files) =>{
    if(files.length === 0){
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('https://localhost:44342/api/Upload', formData,{ reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if(event.type === HttpEventType.UploadProgress){
        this.progress = Math.round(100* event.loaded / event.total);
      }
      else if(event.type === HttpEventType.Response){
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }
    });

  }



}






