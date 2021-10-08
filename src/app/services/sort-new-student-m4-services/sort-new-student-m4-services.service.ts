import { NewStudentM4Models } from './../../models/new-student-m4-models';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortNewStudentM4ServicesService {
  url: string = 'https://localhost:44342/api/Newstudentm4';

  constructor(private http: HttpClient, private router: Router) { }

  getNewstudentm4List(){
    return this.http.get<NewStudentM4Models[]>('http://127.0.0.1:8000/api/getnewstudentm4');
  }

  getNewstudentm4ID(id){
    return this.http.get('http://127.0.0.1:8000/api/getnewstudentm4id/'+id);
  }

  updateNewstudentm4(id : number, data): Observable<any>{
    return this.http.put('http://127.0.0.1:8000/api/editnewstudentm4/' + id, data)
  }
}
