import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentInformationCore } from 'src/app/models/student-information-core';
import { StudentCoreInformationService } from 'src/app/services/student_core_information_services/student-core-information.service';

@Component({
  selector: 'app-fix-profile-student',
  templateUrl: './fix-profile-student.component.html',
  styleUrls: ['./fix-profile-student.component.css']
})
export class FixProfileStudentComponent implements OnInit {
  data: any;
  id: number;
  sciListid: StudentInformationCore;
  getStudentListID: any = {};

  constructor(private aRoute: ActivatedRoute, private sci: StudentCoreInformationService) { }

  ngOnInit(): void {
    this.aRoute.params.subscribe(params => {
      this.sci.getStudentListID(params.id).subscribe(data => {
        this.getStudentListID = data;
      });
    });

    //this.id = this.aRoute.snapshot.params.id;
    //this.getStudentListID();
  }

  /*getStudentListID(){
    this.sci.getStudentListID(this.id).subscribe(res => {
      this.data = res;
      this.sciListid=this.data;
    });
  }*/

  fixProfileStudent(StudentInformationCore){
    this.sci.fixProfileStudent(StudentInformationCore);
  }

}
