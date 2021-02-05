import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-student-line',
  templateUrl: './check-student-line.component.html',
  styleUrls: ['./check-student-line.component.css']
})
export class CheckStudentLineComponent{
  class = ['มัธยมศึกษาปีที่ 1','มัธยมศึกษาปีที่ 2','มัธยมศึกษาปีที่ 3','มัธยมศึกษาปีที่ 4',
          'มัธยมศึกษาปีที่ 5','มัธยมศึกษาปีที่ 6'];
  room = ['ห้อง 1','ห้อง 2','ห้อง 3','ห้อง 4','ห้อง 5','ห้อง 6'];
}
/*
export class CheckStudentLineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
