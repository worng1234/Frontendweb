import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentCoreInformationService } from 'src/app/services/student_core_information_services/student-core-information.service';
import { StudentInformationCore } from 'src/app/models/student-information-core';


@Component({
  selector: 'app-student-core-information',
  templateUrl: './student-core-information.component.html',
  styleUrls: ['./student-core-information.component.css']
})
export class StudentCoreInformationComponent implements OnInit {

  sciList : StudentInformationCore[] = [];
  prename = ['','นาย','นางสาว'];
  searchPrename: string;
  searchName: string;
  searchSurname: string;
  searchStudentID: string;


  constructor( private sci : StudentCoreInformationService, private http : HttpClientModule) {}

  ngOnInit(): void {
    this.sci.getStudentList()
    .subscribe((data: StudentInformationCore[]) => { console.log(data); this.sciList = data;});
  }

  search(){
    this.sciList = this.sciList.filter(res =>{
      return res.name;
    });
  }


}
