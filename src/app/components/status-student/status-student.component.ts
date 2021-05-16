import { BehaviorstudentModels } from './../../models/behavior-student-models';
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
  student_id: number;
  bh: BehaviorstudentModels | undefined;
  b: BehaviorstudentModels[] = [];

  constructor( private aRoute: ActivatedRoute, private bs: BerhaviorService,
               private sci: StudentCoreInformationService) {
      this.aRoute.snapshot.paramMap.get('student_id');
      this.student_id = + this.aRoute.snapshot.paramMap.get('student_id');
  }

  ngOnInit(): void{
    this.getStatusstudent();
  }

  getStatusstudent(){
    this.sci.getStatusstudent(this.student_id).subscribe(data =>{
      this.bh = data;
      console.log(data);
    })

  }

}
