import { catchError, retry } from 'rxjs/operators';
import { StudentInformationCore } from './../../models/student-information-core';
import { Observable, throwError } from 'rxjs';
import { HttpClient ,HttpParams ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class StudentCoreInformationService {
  url: string = 'https://localhost:44342/api/StudentCoreInformation';
  currentStudent: any = {};

  constructor( private http: HttpClient, private router: Router) { }

  getStudentList(): Observable<any>{
    return this.http.get<StudentInformationCore[]>(this.url);
  }

  // getStudentListID(id: number): Observable<any>{
  //   return this.http.get(this.url + '/' + id);
  // }
  getStudentListID(id: number): Observable<any>{
    return this.http.get(this.url + '/' + id).pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  fixProfileStudent(StudentInformationCore){
    this.currentStudent = {
      "id" : StudentInformationCore.id,
      "name" : StudentInformationCore.name,
      "surname" : StudentInformationCore.surname,
      "id_number" : StudentInformationCore.id_number,
      "tel" : StudentInformationCore.tel,
      "email" : StudentInformationCore.email,
      "father_name" : StudentInformationCore.father_name,
      "father_tel" : StudentInformationCore.father_tel,
      "mother_name" : StudentInformationCore.mother_name,
      "mother_tel" : StudentInformationCore.mother_tel,
      "parent_name" : StudentInformationCore.parent_name,
      "parent_tel" : StudentInformationCore.parent_tel,
    };
    this.http.put(this.url + '/' + StudentInformationCore.id,
    this.currentStudent).toPromise()
      .then(() => {
        this.router.navigate(['/Studentcoreinformation'])
      });
  }

  updateProfilestudent(id: number, data): Observable<any>{
    return this.http.put(this.url + '/' + id, data);
  }

  httpError(error) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
