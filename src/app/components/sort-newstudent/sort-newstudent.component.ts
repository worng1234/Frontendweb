import { HttpClientModule } from '@angular/common/http';
import { NewStudentM1Models } from './../../models/new-student-m1-models';
import { SortNewstudentService } from './../../services/sort-new-student-services/sort-newstudent.service';
import { Component, OnInit } from '@angular/core';
//Icon
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
//Tables
import {MatPaginator} from '@angular/material/paginator';




@Component({
  selector: 'app-sort-newstudent',
  templateUrl: './sort-newstudent.component.html',
  styleUrls: ['./sort-newstudent.component.css']
})
export class SortNewstudentComponent implements OnInit {
  school = ['','โรงเรียนพร้าววิทยาคม','โรงเรียนบ้านสันปง','โรงเรียนสหกรณ์นิคมวิทยา','โรงเรียนบ้านแม่ป่าคี',
  'โรงเรียนบ้านหนองปิด','โรงเรียนสหกรณ์ดำริ','โรงเรียนบ้านทามะเกี๋ยง','โรงเรียนชุมชนบ้านโป่ง',
  'โรงเรียนบ้านนาบุญโหล่งขอด','โรงเรียนพร้าวบูรพา','โรงเรียนบ้านต้นรุง','โรงเรียนบ้านป่าตุ้ม',
  'โรงเรียนบ้านป่าไหน่','โรงเรียนบ้านสันกลาง','โรงเรียนประชาสามัคคีวิทยา','โรงเรียนประดู่วิทยา','โรงเรียนบ้านแม่ปั๋ง',
  'โรงเรียนบ้านแม่ปั๋งสาขาขุนปั๋ง','โรงเรียนบ้านแม่เหียะ','โรงเรียนบ้านขุนแจ๋','โรงเรียนบ้านแจ่งกู่เรือง','โรงเรียนบ้านห้วยบง','โรงเรียนบ้านหลวง'];

  student_class =['','มัธยมศึกษาปีที่ 1','มัธยมศึกษาปีที่ 2'];

  study_area = ['','นอกเขต','ในเขต'];
  prename = ['','เด็กชาย','เด็กหญิง']
  newstudentm1list:any;
  searchFunctionschool;
  searchFunctionname : string;
  searchFunctionsurname : string;
  searchFunctionarea: string;
  searchFunctionprename;
  imageDirectoryPath:any = 'http://127.0.0.1:8000/storage/newstudentm1PIC/';

  //Icon
  faEdit = faEdit;
  faFileAlt = faFileAlt;


  constructor( private nsm1list: SortNewstudentService, private http: HttpClientModule) { }

  ngOnInit(){
    this.getAll();

  }

  getAll(){
    this.nsm1list.getNewstudentm1List().subscribe(res => {
      this.newstudentm1list = res;
      console.log(this.newstudentm1list);
    })
  }


  search(){
    this.newstudentm1list = this.newstudentm1list.filter(res =>{
      return res.fname;
    });
  }

  // public createImgPath = (serverPath: string) => {
  //   return `https://localhost:44342/${serverPath}`;
  //   console.log(serverPath);

  // }
}

