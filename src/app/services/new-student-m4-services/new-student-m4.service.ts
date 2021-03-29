import { NewStudentM4Component } from './../../components/new-student-m4/new-student-m4.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewStudentM1Component } from 'src/app/components/new-student-m1/new-student-m1.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewStudentM4Service {
  url: string = 'https://localhost:44342/api/Newstudentm4';
  newStudentm4 : any;
  currentStudentm4 : any = {};


  constructor( private http: HttpClient, private router: Router) { }
  addNewstudentm4(newstudentm4){
    this.newStudentm4 = {
      "id" : newstudentm4.id,
      "prename" : newstudentm4.prename,
      "name" : newstudentm4.name,
      "surname" : newstudentm4.surname,
      "sex" : newstudentm4.sex,
      "pic" : newstudentm4.pic,
      "id_number" : newstudentm4.id_number,
      "birthday" : newstudentm4.birthday,
      "religion" : newstudentm4.religion,
      "nationality" : newstudentm4.nationality,
      "origin" : newstudentm4.origin,
      "father_name" : newstudentm4.father_name,
      "father_id" : newstudentm4.father_id,
      "faher_job" : newstudentm4.father_job,
      "father_tel" : newstudentm4.father_tel,
      "mother_name" : newstudentm4.mother_name,
      "mother_id" : newstudentm4.mother_id,
      "mother_job" : newstudentm4.mother_job,
      "mother_tel" : newstudentm4.mother_tel,
      "parent" : newstudentm4.parent,
      "parent_name" : newstudentm4.parent_name,
      "parent_id" : newstudentm4.parent_id,
      "parent_job" : newstudentm4.parent_job,
      "parent_tel" : newstudentm4.parent_tel,
      "house_number" : newstudentm4.house_number,
      "bloc" : newstudentm4.bloc,
      "street" : newstudentm4.street,
      "road" : newstudentm4.road,
      "sub_district" : newstudentm4.sub_district,
      "district" : newstudentm4.district,
      "province" : newstudentm4.province,
      "post" : newstudentm4.post,
      "final_school" : newstudentm4.final_school,
      "final_school_sub_district" : newstudentm4.final_school_sub_district,
      "final_school_district" : newstudentm4.final_school_district,
      "final_school_province" : newstudentm4.final_school_province,
      "disabled" : newstudentm4.disabled,
      "poor_person" : newstudentm4.poor_person,
      "etc" : newstudentm4.etc,
      "major_1" : newstudentm4.major_1,
      "major_2" : newstudentm4.major_2,
      "major_3" : newstudentm4.major_3,
      "major_4" : newstudentm4.major_4,
      "major_5" : newstudentm4.major_5,
      "major_6" : newstudentm4.major_6,
      "major_7" : newstudentm4.major_7,
      "major_8" : newstudentm4.major_8,
      "major_9" : newstudentm4.major_9,
      "major_10" : newstudentm4.major_10,
    }
  }

}
