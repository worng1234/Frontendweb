import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { test1 } from 'src/app/models/test1';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  private url = 'http://127.0.0.1:8000/api/getnewstudentm1';
  url2: string = 'https://localhost:44342/api/test2';
  addTest1: any;
  addTest2: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

  constructor( private http: HttpClient, private router: Router) { }
    httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
  }

  uploadData(data: any){
    const headers = new HttpHeaders();
    return this.http.post(environment.apiURL+'/api/uploadimage/', data, {
      headers: headers
     });
    }

    checkboxtest(data: any){
      return this.http.post('http://127.0.0.1:8000/api/test',data)
    }

    create(data): Observable<test1> {
      return this.http.post<test1>('http://127.0.0.1:8000/api/test', JSON.stringify(data), this.httpOptions)
    }


  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
