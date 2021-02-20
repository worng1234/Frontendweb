import { newstudentm1 } from 'src/app/models/new-student-m1-models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SortNewstudentService {
  url: string = 'https://localhost:44342/api/Newstudentm1';

  constructor(private http: HttpClient, private router: Router) { }

  getNewstudentm1List(){
    return this.http.get<newstudentm1><this.url>;
  }
}
