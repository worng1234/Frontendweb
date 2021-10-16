import { test1 } from './../../models/test1';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TestService } from 'src/app/services/test/test.service';
import { ActivatedRoute } from '@angular/router';
// import Swal from 'sweetalert2';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { test2 } from 'src/app/models/test2';
import { Studentdetail } from 'src/app/models/studentdetail-models';
import { AddStudentcoreService } from 'src/app/services/add-studentcore/add-studentcore.service';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  test2 = new test2();
  data: any;
  id: any;
  test = new test1();
  imageDirectoryPath:any = 'http://127.0.0.1:8000/storage/newstudentm1PIC/';
  faWrench = faWrench;
  studentdetail = new Studentdetail();

  gadjectDetail:any = [];
  internetDetail:any = [];
  lackDetail:any = [];
  frienddrug:any = [];
  sexualDetail:any=[];
  darktravelDetail:any = [];
  selldrugDetail:any = [];
  notparentDetail:any = [];
  sexualharrasmentDetail:any = [];
  cuteworldDetail:any = [];
  richmanDetail:any = [];
  problemDetail:any = [];
  helpDetail:any = [];

  goSchool = ['เดินเท้า','รถจักรยาน','รถจักรยานยนต์','รถเดือน','พ่อแม่มาส่ง'];

  Disable = ['ไม่มี','การมองเห็น','การได้ยิน','สติปัญญา','ร่างกาย/สุขภาพ','การเรียนรู้','การพูด/ภาษา','พฤติกรรม/อารมณ์','ออทิสติก','พิการซ้ำซ้อน'];

  unFortuned = ['ไม่มี','ถูกบังคับขายแรงงาน','อยู่ในธุรกิจทางเพศ','ถูกทอดทิ้ง','เด็กเร่ร่อน','ได้รับผลกระทบจากเอดส์','ชนกลุ่มน้อย','ถูกทำร้ายทารุณ',
                'เด็กยากจน','เด็กที่มีปัญหาเกี่ยวกับยาเสพติด','เด็กกำพร้า','ทำงานรับผิดชอบตนเองและครอบครัว'];

  gadjectArr = [
    {
      "key":"มือถือ/สมาร์ทโฟน",
      "value":"มือถือ/สมาร์ทโฟน"
    },
    {
      "key":"แท็บเล็ต",
      "value":"แท็บเล็ต"
    },
    {
      "key":"โน๊ตบุ๊ค",
      "value":"โน๊ตบุ๊ค"
    },
    {
      "key":"คอมพิวเตอร์แบบตั้งโต๊ะ",
      "value":"คอมพิวเตอร์แบบตั้งโต๊ะ"
    },
  ]
  internetArr = [
    {
      "key":"อินเตอร์เน็ตมือถือ",
      "value":"อินเตอร์เน็ตมือถือ"
    },
    {
      "key":"อินเตอร์เน็ตสาย",
      "value":"อินเตอร์เน็ตสาย"
    },
  ]
  lackArr = [
    {
      "key":"ขาดแคลนแบบเรียน",
      "value":"ขาดแคลนแบบเรียน"
    },
    {
      "key":"ขาดแคลนเครื่องเขียน",
      "value":"ขาดแคลนเครื่องเขียน"
    },
    {
      "key":"ขาดแคลนอาหารกลางวัน",
      "value":"ขาดแคลนอาหารกลางวัน"
    },
    {
      "key":"ขาดแคลนเครื่องแบบ",
      "value":"ขาดแคลนเครื่องแบบ"
    },
    {
      "key":"ไม่ขาดแคลน",
      "value":"ไม่ขาดแคลน"
    },
  ]
  friend_drugArr = [
    {
      "key":"ใช่",
      "value":"ใช่"
    },
    {
      "key":"ไม่ใช่",
      "value":"ไม่ใช่"
    }
  ]
  sexualArr = [
    {
      "key":"ใช่",
      "value":"ใช่"
    },
    {
      "key":"ไม่ใช่",
      "value":"ไม่ใช่"
    }
  ]
  dark_travelArr = [
    {
      "key":"ใช่",
      "value":"ใช่"
    },
    {
      "key":"ไม่ใช่",
      "value":"ไม่ใช่"
    }
  ]
  sell_drugArr = [
    {
      "key":"ใช่",
      "value":"ใช่"
    },
    {
      "key":"ไม่ใช่",
      "value":"ไม่ใช่"
    }
  ]
  not_parentArr = [
    {
      "key":"ใช่",
      "value":"ใช่"
    },
    {
      "key":"ไม่ใช่",
      "value":"ไม่ใช่"
    }
  ]
  sexual_harrasmentArr = [
    {
      "key":"ใช่",
      "value":"ใช่"
    },
    {
      "key":"ไม่ใช่",
      "value":"ไม่ใช่"
    }
  ]
  cute_worldArr = [
    {
      "key":"น่าอยู่",
      "value":"น่าอยู่"
    },
    {
      "key":"ไม่น่าอยู่",
      "value":"ไม่น่าอยู่"
    }
  ]
  rich_manArr = [
    {
      "key":"มีค่า",
      "value":"มีค่า"
    },
    {
      "key":"ไม่มีค่า",
      "value":"ไม่มีค่า"
    }
  ]
  problemArr = [
    {
      "key":"ครอบครัว",
      "value":"ครอบครัว"
    },
    {
      "key":"การเรียน",
      "value":"การเรียน"
    },
    {
      "key":"สุขภาพ",
      "value":"สุขภาพ"
    },
    {
      "key":"เศรษฐกิจ",
      "value":"เศรษฐกิจ"
    },
    {
      "key":"การคบเพื่อน",
      "value":"การคบเพื่อน"
    },
    {
      "key":"การวางตัวในสังคม",
      "value":"การวางตัวในสังคม"
    },
    {
      "key":"การใช้เวลาว่าง",
      "value":"การใช้เวลาว่าง"
    },
    {
      "key":"การเลือกอาชีพ",
      "value":"การเลือกอาชีพ"
    },
    {
      "key":"การเลือกศึกษาต่อ",
      "value":"การเลือกศึกษาต่อ"
    },
    {
      "key":"การปรับตัวเข้ากับครู-อาจารย์ในโรงเรียน",
      "value":"การปรับตัวเข้ากับครู-อาจารย์ในโรงเรียน"
    },
  ]
  helpArr = [
    {
      "key":"บิดา",
      "value":"บิดา"
    },
    {
      "key":"มารดา",
      "value":"มารดา"
    },
    {
      "key":"ครูแนะแนว",
      "value":"ครูแนะแนว"
    },
    {
      "key":"ครูที่ปรึกษา",
      "value":"ครูที่ปรึกษา"
    },
    {
      "key":"เพื่อน",
      "value":"เพื่อน"
    },
    {
      "key":"อื่นๆ",
      "value":"อื่นๆ"
    }
  ]

  gadject(event){
    const index = this.gadjectDetail.indexOf(event.target.value);
    if(index == -1){
      this.gadjectDetail.push(event.target.value);
    }else{
      this.gadjectDetail.splice(index,1);
    }
  }
  internet(event){
    const index = this.internetDetail.indexOf(event.target.value);
    if(index == -1){
      this.internetDetail.push(event.target.value);
    }else{
      this.internetDetail.splice(index,1);
    }
  }
  lack(event){
    const index = this.lackDetail.indexOf(event.target.value);
    if(index == -1){
      this.lackDetail.push(event.target.value);
    }else{
      this.lackDetail.splice(index,1);
    }
  }
  friend_drug(event){
    const index = this.frienddrug.indexOf(event.target.value);
    if(index == -1){
      this.frienddrug.push(event.target.value);
    }else{
      this.frienddrug.splice(index,1);
    }
  }
  sexual(event){
    const index = this.sexualDetail.indexOf(event.target.value);
    if(index == -1){
      this.sexualDetail.push(event.target.value);
    }else{
      this.sexualDetail.splice(index,1);
    }
  }
  dark_travel(event){
    const index = this.darktravelDetail.indexOf(event.target.value);
    if(index == -1){
      this.darktravelDetail.push(event.target.value);
    }else{
      this.darktravelDetail.splice(index,1);
    }
  }
  sell_drug(event){
    const index = this.selldrugDetail.indexOf(event.target.value);
    if(index == -1){
      this.selldrugDetail.push(event.target.value);
    }else{
      this.selldrugDetail.splice(index,1);
    }
  }
  not_parent(event){
    const index = this.notparentDetail.indexOf(event.target.value);
    if(index == -1){
      this.notparentDetail.push(event.target.value);
    }else{
      this.notparentDetail.splice(index,1);
    }
  }
  sexual_harrasment(event){
    const index = this.sexualharrasmentDetail.indexOf(event.target.value);
    if(index == -1){
      this.sexualharrasmentDetail.push(event.target.value);
    }else{
      this.sexualharrasmentDetail.splice(index,1);
    }
  }
  cute_world(event){
    const index = this.cuteworldDetail.indexOf(event.target.value);
    if(index == -1){
      this.cuteworldDetail.push(event.target.value);
    }else{
      this.cuteworldDetail.splice(index,1);
    }
  }
  rich_man(event){
    const index = this.richmanDetail.indexOf(event.target.value);
    if(index == -1){
      this.richmanDetail.push(event.target.value);
    }else{
      this.richmanDetail.splice(index,1);
    }
  }
  problem(event){
    const index = this.problemDetail.indexOf(event.target.value);
    if(index == -1){
      this.problemDetail.push(event.target.value);
    }else{
      this.problemDetail.splice(index,1);
    }
  }
  help(event){
    const index = this.helpDetail.indexOf(event.target.value);
    if(index == -1){
      this.helpDetail.push(event.target.value);
    }else{
      this.helpDetail.splice(index,1);
    }
  }

  constructor(private http: HttpClientModule, private t : TestService, private aRoute: ActivatedRoute, private addstudent : AddStudentcoreService) { }

  ngOnInit(): void {
    // console.log(this.aRoute.snapshot.params.id);
    // this.id = this.aRoute.snapshot.params.id;
    // this.testID();

  }



  testID(){
    this.t.testID(this.id).subscribe(res => {
      this.data = res;
      this.test = this.data;
    })
  }

  testPost(){
    this.t.testPost1(this.test).subscribe(res1 => {
      console.log(res1);
    });

    this.t.testPost2(this.test2).subscribe(res2 => {
      console.log(res2);
    });
  }

  studentDetail(){
    this.studentdetail.gadject = this.gadjectDetail.toString();
    this.studentdetail.internet = this.internetDetail.toString();
    this.studentdetail.lack = this.lackDetail.toString();
    this.studentdetail.friend_drug = this.frienddrug.toString();
    this.studentdetail.sexual = this.sexualDetail.toString();
    this.studentdetail.dark_travel = this.darktravelDetail.toString();
    this.studentdetail.sell_drug = this.selldrugDetail.toString();
    this.studentdetail.not_parent = this.notparentDetail.toString();
    this.studentdetail.sexual_harrasment = this.sexualharrasmentDetail.toString();
    this.studentdetail.cute_world = this.cuteworldDetail.toString();
    this.studentdetail.rich_man = this.richmanDetail.toString();
    this.studentdetail.problem = this.problemDetail.toString();
    this.studentdetail.help = this.helpDetail.toString();
    this.addstudent.studentdetail(this.studentdetail).subscribe(res4 => {
      console.log(res4);
    });
  }


}
