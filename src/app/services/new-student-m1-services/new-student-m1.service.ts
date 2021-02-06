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

  getListNewstudentm1():Observable<any[]>{
    return this.http.get<any>(this.myAppurl + this.myApiurl);
  }

  deleteNewstudentm1(id: number):Observable<NewStudentM1Component>{
    return this.http.delete<NewStudentM1Component>(this.myAppurl + this.myApiurl + id);
  }

  postNewstudentm1(newstudentm1: NewStudentM1Component):Observable<NewStudentM1Component>{
    return this.http.post<NewStudentM1Component>(this.myAppurl + this.myApiurl, newstudentm1, this.httpOptions);
  }

  loadNewstudentm1(id: number):Observable<NewStudentM1Component>{
    return this.http.get<NewStudentM1Component>( this.myAppurl + this.myApiurl + id);
  }

  putNewstudentm1(id: number, newstudentm1: NewStudentM1Component):Observable<NewStudentM1Component>{
    return this.http.put<NewStudentM1Component>(this.myAppurl + this.myApiurl, newstudentm1, this.httpOptions);
  }
}
