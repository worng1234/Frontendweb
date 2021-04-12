import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentInformationCore } from 'src/app/models/student-information-core';
import { StudentCoreInformationService } from 'src/app/services/student_core_information_services/student-core-information.service';

@Component({
  selector: 'app-behavior-student',
  templateUrl: './behavior-student.component.html',
  styleUrls: ['./behavior-student.component.css']
})
export class BehaviorStudentComponent implements OnInit {

  sciList: StudentInformationCore[] = [];

  class = ['','1','2','3','4','5','6'];
  room = ['','1','2','3','4','5','6','7','8','9','10'];
  major = ['','วิทยาศาสตร์-คณิตศาสตร์','ศิลป์-จีน','ศิลป์-คำนวณ',
          'คหกรรม','เกษตร','ปวช','ศิลป์-พละ','ศิลป์-วาด',
          'วิทยาศาสตร์-คอมพิวเตอร์','ศิลป์-ฝรั่งเศษ'];
  prename = ['','นาย','นางสาว'];

  search_class;
  search_room;
  search_major : string;
  search_prename : string;
  search_name : string;
  search_surname : string;
  search_studentID;

  constructor( private sci: StudentCoreInformationService,
               private http: HttpClientModule) { }

  ngOnInit(): void {
    this.sci.getStudentList().subscribe((data: StudentInformationCore[]) => {this.sciList = data});
  }

  search(){
    this.sciList = this.sciList.filter(res =>{
      return res.name;
    });
  }



}
