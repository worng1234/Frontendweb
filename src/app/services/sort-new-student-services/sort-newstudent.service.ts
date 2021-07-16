import { NewStudentM1Models} from 'src/app/models/new-student-m1-models';
//import { test } from './../../models/test';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SortNewstudentService {

  constructor(private http: HttpClient, private router: Router) { }

  getNewstudentm1List(){
   return this.http.get<NewStudentM1Models[]>('http://127.0.0.1:8000/api/getnewstudentm1');
  }


}
