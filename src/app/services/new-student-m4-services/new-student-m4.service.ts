import { NewStudentM4Component } from './../../components/new-student-m4/new-student-m4.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewStudentM1Component } from 'src/app/components/new-student-m1/new-student-m1.component';
import { Router } from '@angular/router';
import { NewStudentM4Models } from 'src/app/models/new-student-m4-models';

@Injectable({
  providedIn: 'root'
})
export class NewStudentM4Service {

  constructor( private http: HttpClient, private router: Router) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  addNewstudentm4(data: any){
    return this.http.post('http://localhost:8000/api/newstudentm4', data);
  }

}
