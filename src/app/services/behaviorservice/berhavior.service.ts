import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Behaviorstudent } from './../../models/behavior-student-models';
import { Addbehavior } from 'src/app/models/add-behavior-model';

@Injectable({
  providedIn: 'root'
})
export class BerhaviorService {
  url: string = 'https://localhost:44342/api/BehaviorJoinStudentcore';
  url2 = 'https://localhost:44342/api/BehaviorStudent';
  addBehavior: any;

  constructor( private http: HttpClient, private router: Router) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getBehaviorstudent(): Observable<any>{
    return this.http.get<Behaviorstudent[]>(this.url);
  }

  getBehaviorstudentID(student_id): Observable<any>{
    return this.http.get<Behaviorstudent[]>('http://127.0.0.1:8000/api/joinstudentandbehaviorid/' + student_id);
  }

  // AddBehavior(addbehavior) {
  //   this.addBehavior = {
  //     "b_id" : addbehavior.b_id,
  //     "id" : addbehavior.id,
  //     "student_id" : addbehavior.student_id,
  //     "title" : addbehavior.title,
  //     "behavior_date" : addbehavior.behavior_date,
  //     "behavior_history" : addbehavior.behavior_history,
  //     "neg_score" : addbehavior.neg_score,
  //     "pos_score" : addbehavior.pos_score,
  //     "score" : addbehavior.score,
  //   }
  //   this.http.post<any>(this.url2, this.addBehavior) .subscribe( () => {
  //     this.router.navigate(['/BehaviorStudent']);
  //     console.log(this.url2);
  //   });
  // }

  AddBehavior(data) {
    this.http.post<any>(this.url2, data) .subscribe( (result) => {
      console.warn("result", result)
    })
    console.warn(data);
    console.log(this.url2);
  }

}
