import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SortNewStudentM4ServicesService } from 'src/app/services/sort-new-student-m4-services/sort-new-student-m4-services.service';

@Component({
  selector: 'app-new-student-m4-id',
  templateUrl: './new-student-m4-id.component.html',
  styleUrls: ['./new-student-m4-id.component.css']
})
export class NewStudentM4IdComponent implements OnInit {

  newstudentm4 = null;

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

}
