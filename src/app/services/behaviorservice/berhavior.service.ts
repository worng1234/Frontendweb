import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Behaviorstudent } from './../../models/behavior-student-models';

@Injectable({
  providedIn: 'root'
})
export class BerhaviorService {
  url: string = 'https://localhost:44342/api/BehaviorJoinStudentcore';

  constructor( private http: HttpClient, private router: Router) { }

  getBehaviorstudent(): Observable<any>{
    return this.http.get<Behaviorstudent[]>(this.url);
  }

  getBehaviorstudentID(student_id: number): Observable<any>{
    return this.http.get<Behaviorstudent[]>(this.url + '/' + student_id);
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
