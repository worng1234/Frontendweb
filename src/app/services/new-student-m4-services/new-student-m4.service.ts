import { NewStudentM4Component } from './../../components/new-student-m4/new-student-m4.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewStudentM1Component } from 'src/app/components/new-student-m1/new-student-m1.component';

@Injectable({
  providedIn: 'root'
})
export class NewStudentM4Service {
  readonly myAppurl = 'https://localhost:44342/';
  readonly myApiurl = 'api/Newstudentm4';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor( private http: HttpClient) { }
  getListNewstudentm4():Observable<NewStudentM4Component[]>{
    return this.http.get<NewStudentM4Component[]>(this.myAppurl + this.myApiurl );
  }

  loadNewstudentm4(id: number):Observable<NewStudentM4Component>{
    return this.http.get<NewStudentM4Component>( this.myAppurl + this.myApiurl + id );
  }

  deleteNewstudentm4(id: number):Observable<NewStudentM4Component>{
    return this.http.delete<NewStudentM4Component>( this.myAppurl + this.myApiurl + id );
  }

  postNewstudentm4(newstudentm4: NewStudentM4Component):Observable<NewStudentM4Component>{
    return this.http.post<NewStudentM4Component>( this.myAppurl + this.myApiurl, newstudentm4, this.httpOptions );
  }

  putNewstudentm4(id: number, newstudentm4: NewStudentM4Component):Observable<NewStudentM4Component>{
    return this.http.put<NewStudentM4Component>( this.myAppurl + this.myApiurl, newstudentm4, this.httpOptions);
  }
}
