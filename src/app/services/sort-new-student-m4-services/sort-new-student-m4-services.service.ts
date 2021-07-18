import { NewStudentM4Models } from './../../models/new-student-m4-models';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SortNewStudentM4ServicesService {
  url: string = 'https://localhost:44342/api/Newstudentm4';

  constructor(private http: HttpClient, private router: Router) { }

  getNewstudentm4List(){
    return this.http.get<NewStudentM4Models[]>('http://127.0.0.1:8000/api/getnewstudentm4');
  }
}
