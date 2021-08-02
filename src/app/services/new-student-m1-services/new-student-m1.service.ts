import { NewStudentM1Models } from './../../models/new-student-m1-models';
import { HttpClient, HttpClientModule, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { NewStudentM1Component } from '../../components/new-student-m1/new-student-m1.component';
import { IfStmt } from '@angular/compiler';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class NewStudentM1Service {
  newStudentm1 : any;


  constructor( private http: HttpClient, private router: Router) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  addNewstudentm1(data: any){
    return this.http.post(environment.apiURL+'/api/newstudentm1', data);
  }

  uploadImage(data: any){
    const headers = new HttpHeaders();
    return this.http.post(environment.apiURL+'/api/uploadimage/', data, {
      headers: headers
     });
    }


}
