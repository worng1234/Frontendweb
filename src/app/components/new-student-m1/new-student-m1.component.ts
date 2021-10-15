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

  prename = ['','เด็กชาย','เด็กหญิง'];
  prename_parent = ['','นาย','นาง','นางสาว'];
  gender = ['','ชาย','หญิง'];

  days = ['','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'
          ,'16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];

  mounths = ['','มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤษจิกายน','ธันวาคม'];

  years = ['','2540','2541','2542','2543','2544','2545','2546','2547','2548','2549','2550','2551',
            '2552','2553','2554','2555','2556','2557','2558','2559','2560','2561','2562','2563','2564'];

  parents = ['','พี่ชาย','พี่สาว','ลุง','ป้า','น้า','อา','ปู่','ย่า','ตา','ยาย'];

  newstudent = new NewStudentM1Models();
  get: any;
  files: File = null;
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
    }



  addNewstudentm1(){
    const fd = new FormData();
    fd.append('pic', this.files, this.files.name);
    fd.append('id_number_pic', this.files, this.files.name);
    fd.append('house_pic', this.files, this.files.name);
    //Information
    fd.append('prename', this.newstudent.prename);
    fd.append('fname', this.newstudent.fname);
    fd.append('nameCen', this.newstudent.nameCen);
    fd.append('surname', this.newstudent.surname);
    fd.append('sex', this.newstudent.sex);
    fd.append('idNumber', this.newstudent.idNumber);
    fd.append('day', this.newstudent.day);
    fd.append('mounth', this.newstudent.mounth);
    fd.append('year', this.newstudent.year);
    fd.append('religion', this.newstudent.religion);
    fd.append('nationality', this.newstudent.nationality);
    fd.append('origin', this.newstudent.origin);
    fd.append('disabled', this.newstudent.disabled);
    fd.append('poorPerson', this.newstudent.poorPerson);
    fd.append('etc', this.newstudent.etc);
    fd.append('tel', this.newstudent.tel);
    fd.append('email', this.newstudent.email);
    fd.append('father_prename', this.newstudent.father_prename);
    fd.append('fatherName', this.newstudent.fatherName);
    fd.append('fatherNamecen', this.newstudent.fatherNamecen);
    fd.append('fatherSurname', this.newstudent.fatherSurname);
    fd.append('fatherId', this.newstudent.fatherId);
    fd.append('fatherJob', this.newstudent.fatherJob);
    fd.append('fatherTel', this.newstudent.fatherTel);
    fd.append('mother_prename', this.newstudent.mother_prename);
    fd.append('motherName', this.newstudent.motherName);
    fd.append('motherNamecen', this.newstudent.motherNamecen);
    fd.append('motherSurname', this.newstudent.motherSurname);
    fd.append('motherJob', this.newstudent.motherJob);
    fd.append('motherId', this.newstudent.motherId);
    fd.append('motherTel', this.newstudent.motherTel);
    fd.append('parent', this.newstudent.parent);
    fd.append('parent_prename', this.newstudent.parent_prename);
    fd.append('parentName', this.newstudent.parentName);
    fd.append('parentNamecen', this.newstudent.parentNamecen);
    fd.append('parentSurname', this.newstudent.parentSurname);
    fd.append('parentId', this.newstudent.parentId);
    fd.append('parentJob', this.newstudent.parentJob);
    fd.append('parentTel', this.newstudent.parentTel);
    fd.append('houseNumber', this.newstudent.houseNumber);
    fd.append('street', this.newstudent.street);
    fd.append('road', this.newstudent.road);
    fd.append('bloc', this.newstudent.bloc);
    fd.append('subDistrict', this.newstudent.subDistrict);
    fd.append('district', this.newstudent.district);
    fd.append('province', this.newstudent.province);
    fd.append('post', this.newstudent.post);
    fd.append('finalSchool', this.newstudent.finalSchool);
    fd.append('finalSchoolSubDistrict', this.newstudent.finalSchoolSubDistrict);
    fd.append('finalSchoolDistrict', this.newstudent.finalSchoolDistrict);
    fd.append('finalSchoolProvince', this.newstudent.finalSchoolProvince);
    //POST
    this.http.post('http://127.0.0.1:8000/api/registerm1',fd).subscribe(res => {
      console.log(res);

    })

  }

  imageUpload(event){
    this.files = <File>event.target.files[0];
    console.log(this.files);
  }

  get f(){
    return this.form.controls;
  }

  uploadImage(event){
    this.files = event.target.files[0];
    //console.log(this.files);
  }




}






