import { SortNewStudentM4ServicesService } from './../../services/sort-new-student-m4-services/sort-new-student-m4-services.service';
import { NewStudentM4Models } from './../../models/new-student-m4-models';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sort-newstudent-m4',
  templateUrl: './sort-newstudent-m4.component.html',
  styleUrls: ['./sort-newstudent-m4.component.css']
})
export class SortNewstudentM4Component implements OnInit {
  newstudentm4list: NewStudentM4Models[] =[];

  school = ['','โรงเรียนพร้าววิทยาคม','โรงเรียนบ้านสันปง','โรงเรียนสหกรณ์นิคมวิทยา','โรงเรียนบ้านแม่ป่าคี',
  'โรงเรียนบ้านหนองปิด','โรงเรียนสหกรณ์ดำริ','โรงเรียนบ้านทามะเกี๋ยง','โรงเรียนชุมชนบ้านโป่ง',
  'โรงเรียนบ้านนาบุญโหล่งขอด','โรงเรียนพร้าวบูรพา','โรงเรียนบ้านต้นรุง','โรงเรียนบ้านป่าตุ้ม',
  'โรงเรียนบ้านป่าไหน่','โรงเรียนบ้านสันกลาง','โรงเรียนประชาสามัคคีวิทยา','โรงเรียนประดู่วิทยา','โรงเรียนบ้านแม่ปั๋ง',
  'โรงเรียนบ้านแม่ปั๋งสาขาขุนปั๋ง','โรงเรียนบ้านแม่เหียะ','โรงเรียนบ้านขุนแจ๋','โรงเรียนบ้านแจ่งกู่เรือง','โรงเรียนบ้านห้วยบง','โรงเรียนบ้านหลวง'];

  student_class =['','มัธยมศึกษาปีที่ 1','มัธยมศึกษาปีที่ 2'];

  study_area = ['','นอกเขต','ในเขต'];
  prename = ['','นาย','นางสาว']
  searchFunction_school;
  searchFunction_name : string;
  searchFunction_area: string;
  searchFunction_prename;

  constructor( private nsm4List: SortNewStudentM4ServicesService, private http: HttpClientModule) { }

  ngOnInit(): void {
    this.nsm4List.getNewstudentm4List()
      .subscribe((data: NewStudentM4Models[]) => {this.newstudentm4list = data;});
  }
  search(){
    this.newstudentm4list = this.newstudentm4list.filter(res =>{
      return res.name;
    });
  }

}
