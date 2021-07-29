import { NewStudentM1Models } from './../../models/new-student-m1-models';
import { Router } from '@angular/router';
import { HttpClientModule, HttpEventType, HttpClient } from '@angular/common/http';
import { NewStudentM1Service } from './../../services/new-student-m1-services/new-student-m1.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgModel } from "@angular/forms";
import { test3 } from 'src/app/models/test3';



@Component({
  selector: 'app-new-student-m1',
  templateUrl: './new-student-m1.component.html',
  styleUrls: ['./new-student-m1.component.css']
})

export class NewStudentM1Component implements OnInit {

  prename = ['','นาย','นางสาว'];
  gender = ['','ชาย','หญิง'];
  newstudent = new NewStudentM1Models();
  get: any;
  files:any;
  submitted = false;
  form: FormGroup;
  test3 = new test3();
  data:any;


  constructor(
    public nm1s: NewStudentM1Service,
    public router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,) { }

    ngOnInit(): void{
      this.createForm();
    }

  addNewstudentm1(){
    this.nm1s.addNewstudentm1(this.newstudent).subscribe(res => {
      console.log(res);
    });
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    const formData = new FormData();
    formData.append("image", this.files, this.files.image);

    this.nm1s.uploadImage(formData).subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }

  get f(){
    return this.form.controls;
  }

  uploadImage(event){
    this.files = event.target.files[0]
    console.log(this.files);
  }

  createForm(){
    this.form = this.formBuilder.group({
      image: [null, Validators.required],
      prename: [null, Validators.required],
      name: [null, Validators.required],
      nameCen: [null, Validators.required],
      surname: [null, Validators.required],
      sex: [null, Validators.required],
      idNumber: [null, Validators.required],
      birthday: [null, Validators.required],
      religion: [null, Validators.required],
      nationality: [null, Validators.required],
      origin: [null, Validators.required],
      disabled: [null, Validators.required],
      poorPerson: [null, Validators.required],

    })
  }


}






