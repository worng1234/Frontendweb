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
    }
  }


}
