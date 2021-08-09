import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddStudentcoreService {

  constructor(private http: HttpClient, private router: Router) { }

  addstudent(data: any){
    return this.http.post('http://localhost:8000/api/addstudent', data);
  }

  healtystudent(data: any){
    return this.http.post('http://localhost:8000/api/healtystudent', data);
  }

  parentstudent(data: any){
    return this.http.post('http://localhost:8000/api/parentstudent', data);
  }

  studentdetail(data: any){
    return this.http.post('http://localhost:8000/api/studentdetail', data);
  }

  talentstudent(data: any){
    return this.http.post('http://localhost:8000/api/talentstudent', data);
  }

  studentcore(data: any){
    return this.http.post('http://localhost:8000/api/studentcore', data);
  }
}
