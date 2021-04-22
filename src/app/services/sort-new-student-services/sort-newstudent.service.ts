import { NewStudentM1Models} from 'src/app/models/new-student-m1-models';
import { test } from './../../models/test';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SortNewstudentService {
  url: string = 'https://localhost:44342/api/Newstudentm1';
  url2 : string = 'https://localhost:44342/api/Testjoin/GetNewstudentm4'

  constructor(private http: HttpClient, private router: Router) { }

  getNewstudentm1List(){
   return this.http.get<NewStudentM1Models[]>(this.url);
  }

  getTest(){
    return this.http.get<test[]>(this.url2);
  }

}
