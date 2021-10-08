import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SortNewStudentM4ServicesService } from 'src/app/services/sort-new-student-m4-services/sort-new-student-m4-services.service';


@Component({
  selector: 'app-fix-new-student-id-m4',
  templateUrl: './fix-new-student-id-m4.component.html',
  styleUrls: ['./fix-new-student-id-m4.component.css']
})
export class FixNewStudentIdM4Component implements OnInit {

  newstudentm4 = null;
  message ='';

  constructor(private sortnewstudentm4service : SortNewStudentM4ServicesService, private aRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.getnewstudentm4ID(this.aRoute.snapshot.paramMap.get('id'));
  }

  getnewstudentm4ID(id) : void{
    this.sortnewstudentm4service.getNewstudentm4ID(id).subscribe(res => {
      this.newstudentm4 = res;
      console.log(res);
    },error =>{
      console.log(error);
    });
  }

  updateNewstudentm4(): void {
    this.sortnewstudentm4service.updateNewstudentm4(this.newstudentm4.id, this.newstudentm4)
    .subscribe(response =>{
      console.log(response);
      this.message = 'Success update student';
    },error =>{
      console.log(error);
    })
  }

}
