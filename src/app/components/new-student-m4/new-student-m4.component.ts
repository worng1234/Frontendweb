import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-student-m4',
  templateUrl: './new-student-m4.component.html',
  styleUrls: ['./new-student-m4.component.css']
})
/*export class NewStudentM4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
export class NewStudentM4Component{
  prename = ['นาย','นางสาว'];
  gender = ['ชาย','หญิง'];
  major = ['วิทยาศาสตร์-คณิตศาสตร์','ศิลป์-จีน','ศิลป์-คำนวณ','คหกรรม','เกษตร','ปวช','ศิลป์-พละ','ศิลป์-วาด','วิทยาศาสตร์-คอมพิวเตอร์','ศิลป์-ฝรั่งเศษ'];
}
