import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StudentInformationCore } from 'src/app/models/student-information-core';

@Injectable({
  providedIn: 'root'
})
export class StudentCoreInformationService {
  url: string = 'https://localhost:44342/api/Studentcoreinformation'

  constructor( private http: HttpClient, private router: Router) { }

  getStudentList(){
    return this.http.get<StudentInformationCore[]>(this.url);
  }

}
