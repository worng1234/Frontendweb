import { catchError, retry } from 'rxjs/operators';
import { StudentInformationCore } from './../../models/student-information-core';
import { Observable, throwError } from 'rxjs';
import { HttpClient ,HttpParams ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StudentCoreInformationService {
  url: string = 'http://localhost:8000/api/getstudentcore';


  constructor( private http: HttpClient, private router: Router) { }

  getStudentList(): Observable<any>{
    return this.http.get<StudentInformationCore[]>('http://localhost:8000/api/getstudentcore');
  }

  getStudentListID(id){
    return this.http.get('http://127.0.0.1:8000/api/getstudentcoreid/'+id);
  }

  updateProfilestudent(id: number, data): Observable<any>{
    return this.http.put('http://127.0.0.1:8000/api/editstudentcore/' + id, data);
  }

  getStudentjoin(student_id){
    return this.http.get('http://127.0.0.1:8000/api/joinstudentandbehaviorid/'+student_id);
  }

  httpError(error) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
