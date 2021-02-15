import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewStudentM1Component } from '../../components/new-student-m1/new-student-m1.component';
//test
@Injectable({
  providedIn: 'root'
})
export class NewStudentM1Service {
  readonly myAppurl = 'https://localhost:44342/';
  readonly myApiurl = 'api/Newstudentm1';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor( private http: HttpClient) { }


}
