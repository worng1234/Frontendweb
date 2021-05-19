import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddBehaviorService {
  url = 'https://localhost:44342/api/BehaviorStudentDBs';
  addBehavior: any;

  constructor( private http: HttpClient, private router: Router) { }

  AddBehavior(addbehavior) {
    this.addBehavior = {
      "b_id" : addbehavior.b_id,
      "id" : addbehavior.id,
      "student_id" : addbehavior.student_id,
      "title" : addbehavior.title,
      "behavior_date" : addbehavior.behavior_date,
      "behavior_history" : addbehavior.behavior_history,
      "neg_score" : addbehavior.neg_score,
      "pos_score" : addbehavior.pos_score,
      "score" : addbehavior.score,
    }
    this.http.post<any>(this.url, this.addBehavior) .subscribe( (data) => {
      this.router.navigate(['/BehaviorStudentDBs']);
        console.log(data);
    });
    console.log(this.url);
  }
}
