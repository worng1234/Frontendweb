import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {

  public data = {
    user:null,
    password: null
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.data);
  }

}
