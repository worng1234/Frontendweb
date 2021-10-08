import { NewStudentM1Models} from 'src/app/models/new-student-m1-models';
//import { test } from './../../models/test';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SortNewstudentService {

  constructor(private http: HttpClient, private router: Router) { }

  getNewstudentm1List(){
   return this.http.get<NewStudentM1Models[]>('http://127.0.0.1:8000/api/getnewstudentm1');
  }

  getNewstudentm1ID(id){
    return this.http.get('http://127.0.0.1:8000/api/getnewstudentm1id/'+id);
  }

  updateNewstudentm1(id : number, data): Observable<any>{
    return this.http.put('http://127.0.0.1:8000/api/editnewstudentm1/' + id, data)
  }
}
