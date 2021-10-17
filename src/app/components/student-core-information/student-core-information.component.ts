import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentCoreInformationService } from 'src/app/services/student_core_information_services/student-core-information.service';
import { StudentInformationCore } from 'src/app/models/student-information-core';
//Icon
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Studentcore } from 'src/app/models/studentcore-models';


@Component({
  selector: 'app-student-core-information',
  templateUrl: './student-core-information.component.html',
  styleUrls: ['./student-core-information.component.css']
})
export class StudentCoreInformationComponent implements OnInit {

  sciList : any;

  Class = ['','ชั้นมัธยมศึกษาปีที่ 1','ชั้นมัธยมศึกษาปีที่ 2','ชั้นมัธยมศึกษาปีที่ 3','ชั้นมัธยมศึกษาปีที่ 4','ชั้นมัธยมศึกษาปีที่ 5','ชั้นมัธยมศึกษาปีที่ 6','ปวช.1','ปวช.2','ปวช.3'];
  Room = ['','1','2','3','4','5','6','7','8','9','10'];

  searchClass: string;
  searchRoom: string;
  searchFullName: string;
  //Icon
  faEdit = faEdit;
  faTrash = faTrash;


  constructor( private sci : StudentCoreInformationService, private http : HttpClientModule) {}

  ngOnInit(): void {
    this.sci.getStudentList()
    .subscribe((data: Studentcore[]) => { console.log(data); this.sciList = data;});
  }

  search(){
    this.sciList = this.sciList.filter(res =>{
      return res.fname;
    });
  }


}
