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
  url2: string = 'https://localhost:44342/api/BehaviorStudent';

  constructor( private http: HttpClient, private router: Router) { }

  getBehaviorstudent(): Observable<any>{
    return this.http.get<Behaviorstudent[]>(this.url);
  }

  getBehaviorstudentID(student_id: number): Observable<any>{
    return this.http.get<Behaviorstudent[]>(this.url + '/' + student_id);
  }


}
