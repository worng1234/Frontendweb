import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Addressstudent } from 'src/app/models/addressstudent-models';
import { Healtystudent } from 'src/app/models/healtystudent-models';
import { Parentstudent } from 'src/app/models/parentstudent-models';
import { StudentInformationCore } from 'src/app/models/student-information-core';
import { Studentcore } from 'src/app/models/studentcore-models';
import { Studentdetail } from 'src/app/models/studentdetail-models';
import { Talentstudent } from 'src/app/models/talentstudent-models';
import { StudentCoreInformationService } from 'src/app/services/student_core_information_services/student-core-information.service';

@Component({
  selector: 'app-show-student-by-id',
  templateUrl: './show-student-by-id.component.html',
  styleUrls: ['./show-student-by-id.component.css']
})
export class ShowStudentByIdComponent implements OnInit {
  data: any;
  id: any;
  studentcore = new Studentcore();
  addressstudent = new Addressstudent();
  healtystudent = new Healtystudent();
  parentstudent = new Parentstudent();
  studentdetail = new Studentdetail();
  talentstudent = new Talentstudent();



  constructor(private aRoute: ActivatedRoute, private sci: StudentCoreInformationService) {
    // this.aRoute.snapshot.paramMap.get('id_s');
    // this.id_s = +this.aRoute.snapshot.paramMap.get('id_s');
   }

  ngOnInit(){
    console.log(this.aRoute.snapshot.params.id);
    this.id = this.aRoute.snapshot.params.id;
    this.getStudentListID();

  }

  getStudentListID(){
    this.sci.studentcoreID(this.id).subscribe(res=> {
      this.data = res;
      this.studentcore = this.data;
      console.log(this.studentcore);
    });

    this.sci.healtystudentID(this.id).subscribe(res2=>{
      this.data = res2;
      this.healtystudent = this.data;
      console.log(this.healtystudent);
    });

    this.sci.addressstudentID(this.id).subscribe(res3 => {
      this.data = res3;
      this.addressstudent = this.data;
      console.log(this.addressstudent);
    });

    this.sci.parentstudentID(this.id).subscribe(res4 => {
      this.data = res4;
      this.parentstudent = this.data;
      console.log(this.parentstudent);
    });

    this.sci.studentdetailID(this.id).subscribe(res5 => {
      this.data = res5;
      this.studentdetail = this.data;
      console.log(this.studentdetail);
    });

    this.sci.talentstudentID(this.id).subscribe(res6 => {
      this.data = res6;
      this.talentstudent = this.data;
      console.log(this.talentstudent);
    });
  }




}
