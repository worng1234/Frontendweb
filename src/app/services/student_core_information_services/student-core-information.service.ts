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
  url: string = 'https://localhost:44342/api/StudentCoreInformation';


  constructor( private http: HttpClient, private router: Router) { }

  getStudentList(): Observable<any>{
    return this.http.get<StudentInformationCore[]>(this.url);
  }

  getStudentListID(id: number): Observable<any>{
    return this.http.get(this.url + '/' + id).pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  updateProfilestudent(id: number, data): Observable<any>{
    return this.http.put(this.url + '/' + id, data);
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
