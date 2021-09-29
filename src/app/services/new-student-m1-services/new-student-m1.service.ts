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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor( private http: HttpClient, private router: Router) { }


  // addNewstudentm1(data: any){
  //   return this.http.post(environment.apiURL+'/api/registerm1', data);
  // }
  addNewstudentm1(data: any): Observable<NewStudentM1Models>{
    return this.http.post<NewStudentM1Models>('http://127.0.0.1:8000/api/registerm1', JSON.stringify(data), this.httpOptions)
  }


  uploadImage(data: any){
    const headers = new HttpHeaders();
    return this.http.post(environment.apiURL+'/api/uploadimage/', data, {
      headers: headers
     });
    }


}
