import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewStudentM1Component } from '../../components/new-student-m1/new-student-m1.component';



@Injectable({
  providedIn: 'root'
})
export class NewStudentM1Service {
  url: string = 'https://localhost:44342/api/Newstudentm1';
  newStudentm1 : any;
  currentStudentm1 : any = {};



  constructor( private http: HttpClient, private router: Router) { }
  addNewstudentm1(newstudentm1){
    this.newStudentm1 = {
      "id" : newstudentm1.id,
      "prename" : newstudentm1.prename,
      "name" : newstudentm1.name,
      "surname" : newstudentm1.surname,
      "sex" : newstudentm1.sex,
      "pic" : newstudentm1.pic,
      "id_number" : newstudentm1.id_number,
      "birthday" : newstudentm1.birthday,
      "religion" : newstudentm1.religion,
      "nationality" : newstudentm1.nationality,
      "origin" : newstudentm1.origin,
      "father_name" : newstudentm1.father_name,
      "father_id" : newstudentm1.father_id,
      "faher_job" : newstudentm1.father_job,
      "father_tel" : newstudentm1.father_tel,
      "mother_name" : newstudentm1.mother_name,
      "mother_id" : newstudentm1.mother_id,
      "mother_job" : newstudentm1.mother_job,
      "mother_tel" : newstudentm1.mother_tel,
      "parent" : newstudentm1.parent,
      "parent_name" : newstudentm1.parent_name,
      "parent_id" : newstudentm1.parent_id,
      "parent_job" : newstudentm1.parent_job,
      "parent_tel" : newstudentm1.parent_tel,
      "house_number" : newstudentm1.house_number,
      "bloc" : newstudentm1.bloc,
      "street" : newstudentm1.street,
      "road" : newstudentm1.road,
      "sub_district" : newstudentm1.sub_district,
      "district" : newstudentm1.district,
      "province" : newstudentm1.province,
      "post" : newstudentm1.post,
      "final_school" : newstudentm1.final_school,
      "final_school_sub_district" : newstudentm1.final_school_sub_district,
      "final_school_district" : newstudentm1.final_school_district,
      "final_school_province" : newstudentm1.final_school_province,
      "disabled" : newstudentm1.disabled,
      "poor_person" : newstudentm1.poor_person,
      "etc" : newstudentm1.etc,
    }
  }


}
