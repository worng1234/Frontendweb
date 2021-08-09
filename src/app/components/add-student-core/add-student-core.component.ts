import { Component, OnInit } from '@angular/core';
import { Addressstudent } from 'src/app/models/addressstudent-models';
import { Healtystudent } from 'src/app/models/healtystudent-models';
import { Parentstudent } from 'src/app/models/parentstudent-models';
import { Studentcore } from 'src/app/models/studentcore-models';
import { Studentdetail } from 'src/app/models/studentdetail-models';
import { Talentstudent } from 'src/app/models/talentstudent-models';
import { AddStudentcoreService } from 'src/app/services/add-studentcore/add-studentcore.service';

@Component({
  selector: 'app-add-student-core',
  templateUrl: './add-student-core.component.html',
  styleUrls: ['./add-student-core.component.css']
})
export class AddStudentCoreComponent implements OnInit {
  step: any = 1;
  addstudents = new Addressstudent();
  healty = new Healtystudent();
  parent = new Parentstudent();
  studentdetail = new Studentdetail();
  studentcore = new Studentcore();
  talent = new Talentstudent();

  constructor(private addstudent : AddStudentcoreService) { }

  ngOnInit(): void {
  }

  submit(){
    this.step = this.step + 1;
  }
  back(){
    this.step = this.step - 1;
  }

  addstudentcore(){
    this.addstudent.addstudent(this.addstudents).subscribe(res1 => {
      console.log(res1);
    });
    this.addstudent.healtystudent(this.healty).subscribe(res2 => {
      console.log(res2);
    });
    this.addstudent.parentstudent(this.parent).subscribe(res3 => {
      console.log(res3);
    });
    this.addstudent.studentdetail(this.studentdetail).subscribe(res4 => {
      console.log(res4);
    });
    this.addstudent.talentstudent(this.talent).subscribe(res5 => {
      console.log(res5);
    });
    this.addstudent.studentcore(this.studentcore).subscribe(res6 => {
      console.log(res6);
    });
  }
}
