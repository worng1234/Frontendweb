import { BehaviorserviceService } from './../../services/behaviorservice/behaviorservice.service';
import { Behaviorstudent } from './../../models/behavior-student-models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status-student',
  templateUrl: './status-student.component.html',
  styleUrls: ['./status-student.component.css']
})
export class StatusStudentComponent implements OnInit {
  data: any;
  id: number;
  behavior: Behaviorstudent | undefined;
  behaviors: Behaviorstudent[] = [];

  constructor( private aRoute: ActivatedRoute, private bs: BehaviorserviceService) {
      this.aRoute.snapshot.paramMap.get('id');
      this.id = +this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(){
    this.aRoute.snapshot.params.id;
    this.getBehaviorstudentID();
  }

  getBehaviorstudentID(){
   this.bs.getBehaviorstudenttID(this.id).subscribe(data =>{
     this.behavior = data;
   })
  }

}
