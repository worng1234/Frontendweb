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
  img:any;


  constructor(
    public nm1s: NewStudentM1Service,
    public router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,) { }

    ngOnInit(): void{
      this.createForm();
    }

  addNewstudentm1(){
    //Image
    let formdata = new FormData();
    formdata.append("pic",this.files, this.files.name);
    //Information
    formdata.append("prename",this.newstudent.prename);
    formdata.append("name",this.newstudent.name);
    formdata.append("surname",this.newstudent.surname);
    formdata.append("sex",this.newstudent.sex);
    formdata.append("idNumber",this.newstudent.idNumber);
    formdata.append("birthday",this.newstudent.birthday);
    formdata.append("religion",this.newstudent.religion);
    formdata.append("nationality",this.newstudent.nationality);
    formdata.append("origin",this.newstudent.origin);
    formdata.append("disabled",this.newstudent.disabled);
    formdata.append("poorPerson",this.newstudent.poorPerson);
    formdata.append("etc",this.newstudent.etc);
    formdata.append("tel",this.newstudent.tel);
    formdata.append("email",this.newstudent.email);
    formdata.append("nameCen",this.newstudent.nameCen);
    formdata.append("fatherName",this.newstudent.fatherName);
    formdata.append("fatherNamecen",this.newstudent.fatherNamecen);
    formdata.append("fatherSurname",this.newstudent.fatherSurname);
    formdata.append("fatherId",this.newstudent.fatherId);
    formdata.append("fatherJob",this.newstudent.fatherJob);
    formdata.append("fatherTel",this.newstudent.fatherTel);
    formdata.append("motherName",this.newstudent.motherName);
    formdata.append("motherNamecen",this.newstudent.motherNamecen);
    formdata.append("motherSurname",this.newstudent.motherSurname);
    formdata.append("motherId",this.newstudent.motherId);
    formdata.append("motherJob",this.newstudent.motherJob);
    formdata.append("motherTel",this.newstudent.motherTel);
    formdata.append("parent",this.newstudent.parent);
    formdata.append("parentName",this.newstudent.parentName);
    formdata.append("parentNamecen",this.newstudent.parentNamecen);
    formdata.append("parentSurname",this.newstudent.parentSurname);
    formdata.append("parentId",this.newstudent.parentId);
    formdata.append("parentJob",this.newstudent.parentJob);
    formdata.append("parentTel",this.newstudent.parentTel);
    formdata.append("houseNumber",this.newstudent.houseNumber);
    formdata.append("street",this.newstudent.street);
    formdata.append("bloc",this.newstudent.bloc);
    formdata.append("road",this.newstudent.road);
    formdata.append("subDistrict",this.newstudent.subDistrict);
    formdata.append("district",this.newstudent.district);
    formdata.append("province",this.newstudent.province);
    formdata.append("post",this.newstudent.post);
    formdata.append("finalSchool",this.newstudent.finalSchool);
    formdata.append("finalSchoolSubDistrict",this.newstudent.finalSchoolSubDistrict);
    formdata.append("finalSchoolDistrict",this.newstudent.finalSchoolDistrict);
    formdata.append("finalSchoolProvince",this.newstudent.finalSchoolProvince);
    //POST
    this.nm1s.addNewstudentm1(formdata).subscribe(res => {
      console.log(res);
    });
  }

  imageUpload(event){
    this.files = event.target.files[0];
    console.log(this.files);
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
      pic: [null, Validators.required],
      idNumber: [null, Validators.required],
      birthday: [null, Validators.required],
      religion: [null, Validators.required],
      nationality: [null, Validators.required],
      origin: [null, Validators.required],
      disabled: [null, Validators.required],
      poorPerson: [null, Validators.required],
      etc: [null, Validators.required],
      tel: [null, Validators.required],
      email: [null, Validators.required],
      fatherName: [null, Validators.required],
      fatherNamecen: [null, Validators.required],
      fatherSurname: [null, Validators.required],
      fatherId: [null, Validators.required],
      fatherJob: [null, Validators.required],
      fatherTel: [null, Validators.required],
      motherName: [null, Validators.required],
      motherNamecen: [null, Validators.required],
      motherSurname: [null, Validators.required],
      motherId: [null, Validators.required],
      motherJob: [null, Validators.required],
      motherTel: [null, Validators.required],
      parent: [null, Validators.required],
      parentName: [null, Validators.required],
      parentNamecen: [null, Validators.required],
      parentSurname: [null, Validators.required],
      parentId: [null, Validators.required],
      parentJob: [null, Validators.required],
      parentTel: [null, Validators.required],
      houseNumber: [null, Validators.required],
      street: [null, Validators.required],
      bloc: [null, Validators.required],
      road: [null, Validators.required],
      subDistrict: [null, Validators.required],
      district: [null, Validators.required],
      province: [null, Validators.required],
      post: [null, Validators.required],
      finalSchool: [null, Validators.required],
      finalSchoolSubDistrict: [null, Validators.required],
      finalSchoolDistrict: [null, Validators.required],
      finalSchoolProvince: [null, Validators.required],

    })
  }


}






