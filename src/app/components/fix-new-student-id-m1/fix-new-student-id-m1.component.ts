import { Component, OnInit } from '@angular/core';
import { SortNewstudentService } from 'src/app/services/sort-new-student-services/sort-newstudent.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fix-new-student-id-m1',
  templateUrl: './fix-new-student-id-m1.component.html',
  styleUrls: ['./fix-new-student-id-m1.component.css']
})
export class FixNewStudentIdM1Component implements OnInit {

  newstudentID = null;
  message ='';

  constructor(private sortnewstudentm1service : SortNewstudentService, private aRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.message='';
    this.getnewstudentm1ID(this.aRoute.snapshot.paramMap.get('id'));
  }

  getnewstudentm1ID(id) : void{
    this.sortnewstudentm1service.getNewstudentm1ID(id).subscribe(res => {
      this.newstudentID = res;
      console.log(res);
    },error =>{
      console.log(error);
    });
  }

  updateNewstudentm1(): void {
    this.sortnewstudentm1service.updateNewstudentm1(this.newstudentID.id, this.newstudentID)
    .subscribe(response =>{
      console.log(response);
      this.message = 'Success update student';
    },error =>{
      console.log(error);
    })
  }

}
