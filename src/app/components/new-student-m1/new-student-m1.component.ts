import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-student-m1',
  templateUrl: './new-student-m1.component.html',
  styleUrls: ['./new-student-m1.component.css']
})
/*export class NewStudentM1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
export class NewStudentM1Component{
  prename = ['นาย','นางสาว'];
  gender = ['ชาย','หญิง'];
}
