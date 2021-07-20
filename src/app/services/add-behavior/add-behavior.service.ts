import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddBehaviorService {


  constructor( private http: HttpClient, private router: Router) { }

  addBehavior(data: any){
    return this.http.post('http://localhost:8000/api/addbehavior', data);
  }
}
