import { Observable } from 'rxjs';
import { Behaviorstudent } from './../../models/behavior-student-models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BerhaviorService } from 'src/app/services/behaviorservice/berhavior.service';
import { StudentCoreInformationService } from 'src/app/services/student_core_information_services/student-core-information.service';

@Component({
  selector: 'app-status-student',
  templateUrl: './status-student.component.html',
  styleUrls: ['./status-student.component.css']
})
export class StatusStudentComponent implements OnInit {
  data: any;
  student_id: number;
  b: Behaviorstudent[] = [];

  constructor( private aRoute: ActivatedRoute, private bs: BerhaviorService,) {
      this.aRoute.snapshot.paramMap.get('student_id');
      this.student_id = + this.aRoute.snapshot.paramMap.get('student_id');
  }

  ngOnInit(){
    this.getStatusstudent();

  }

  getStatusstudent(){
    this.bs.getBehaviorstudentID(this.student_id).subscribe(data =>{
      this.b = data;
      console.log(data);
    })

  }

}
