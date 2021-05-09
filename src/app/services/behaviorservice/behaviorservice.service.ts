import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient ,HttpParams ,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BehaviorserviceService {
  url: string = 'https://localhost:44342/api/BehaviorJoinStudentcore';

  constructor( private http: HttpClient, private router: Router) { }

  getBehaviorstudenttID(id: number): Observable<any>{
    return this.http.get(this.url + '/' + id).pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  httpError(error) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
