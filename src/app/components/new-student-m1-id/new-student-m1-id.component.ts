import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewStudentM1Models } from 'src/app/models/new-student-m1-models';
import { SortNewstudentService } from 'src/app/services/sort-new-student-services/sort-newstudent.service';

@Component({
  selector: 'app-new-student-m1-id',
  templateUrl: './new-student-m1-id.component.html',
  styleUrls: ['./new-student-m1-id.component.css']
})
export class NewStudentM1IdComponent implements OnInit {

  data: any;
  id: any;
  newstudentID = new NewStudentM1Models();
  imageDirectoryPath:any = 'http://127.0.0.1:8000/storage/newstudentm1PIC/';

  constructor(private sortnewstudentm1service : SortNewstudentService, private aRoute : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.aRoute.snapshot.params.id);
    this.id = this.aRoute.snapshot.params.id;
    this.getnewstudentm1ID();
  }

  getnewstudentm1ID(){
    this.sortnewstudentm1service.getNewstudentm1ID(this.id).subscribe(res => {
      this.data = res;
      this.newstudentID = this.data;
    })
  }
}
