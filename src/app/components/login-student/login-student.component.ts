import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {

  form: FormGroup;
  public data = {
    user:null,
    password: null
  };

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email:'',
      password:''
    });
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });
    console.log(localStorage.getItem('token'));
    this.http.get('http://localhost:8000/api/User', {headers}).subscribe(
      result => console.log(result)
    );
  } 

  onSubmit(){
    // console.log(this.data);
    const formData = this.form.getRawValue();
    const data = {
      username: formData.email,
      password: formData.password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'ZBNaOGONUHaaVSllaZNSZzr4U5RKycBSwMNcCyuh',
      scope: '*'
    };

    this.http.post('http://localhost:8000/oauth/token', data).subscribe(
      result => {
        console.log('success');
        console.log(result);
      },
      error => {
        console.log('error');
        console.log(error);
      }
    );
  }

}
