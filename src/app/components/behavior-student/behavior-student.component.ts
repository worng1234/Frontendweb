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

  search_class = ['','1','2','3','4','5','6'];
  search_room = ['','1','2','3','4','5','6','7','8','9','10'];

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
