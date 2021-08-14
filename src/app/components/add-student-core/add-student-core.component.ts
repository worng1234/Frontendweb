import { Component, OnInit } from '@angular/core';
import { Addressstudent } from 'src/app/models/addressstudent-models';
import { Healtystudent } from 'src/app/models/healtystudent-models';
import { Parentstudent } from 'src/app/models/parentstudent-models';
import { Studentcore } from 'src/app/models/studentcore-models';
import { Studentdetail } from 'src/app/models/studentdetail-models';
import { Talentstudent } from 'src/app/models/talentstudent-models';
import { AddStudentcoreService } from 'src/app/services/add-studentcore/add-studentcore.service';

@Component({
  selector: 'app-add-student-core',
  templateUrl: './add-student-core.component.html',
  styleUrls: ['./add-student-core.component.css']
})
export class AddStudentCoreComponent implements OnInit {
  //form&model
  step: any = 1;
  addstudents = new Addressstudent();
  healty = new Healtystudent();
  parent = new Parentstudent();
  studentdetail = new Studentdetail();
  studentcore = new Studentcore();
  talent = new Talentstudent();


  //checkbox
  read_write:any = [];
  understandTalent:any = [];
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

  //array
  read_writeArr = [
    {
      "key":"อ่านเขียนคล่อง",
      "value":"อ่านเขียนคล่อง"
    },
    {
      "key":"อ่านเขียนไม่คล่อง",
      "value":"อ่านเขียนไม่คล่อง"
    },
    {
      "key":"อ่านเขียนได้",
      "value":"อ่านเขียนได้"
    },
    {
      "key":"อ่านเขียนไม่ได้",
      "value":"อ่านเขียนไม่ได้"
    },
  ]
  understandArr = [
    {
      "key":"ใช่",
      "value":"ใช่"
    },
    {
      "key":"ไม่ใช่",
      "value":"ไม่ใช่"
    },
  ]
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
      "key":"โน๊ตบุค",
      "value":"โน๊ตบุค"
    },
    {
      "key":"คอมพิวเตอร์",
      "value":"คอมพิวเตอร์"
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
  healtyArr1 = [
    {
      "key":"ปกติ",
      "value":"sight_eye1"
    },
    {
      "key":"สายตาสั้น",
      "value":"sight_eye2"
    },
    {
      "key":"สายตายาว",
      "value":"sight_eye3"
    },
    {
      "key":"สายตาเอียง",
      "value":"sight_eye4"
    },
    {
      "key":"ตาบอดสี",
      "value":"sight_eye5"
    },
    {
      "key":"อื่นๆ",
      "value":"sight_eye6"
    }
  ]
  healtyArr2 = [
    {
      "key":"ใช่",
      "value":"glasses"
    },
    {
      "key":"ไม่ใช่",
      "value":"glasses"
    }
  ]
  healtyArr3 = [
    {
      "key":"ใช่",
      "value":"unsound"
    },
    {
      "key":"ไม่ใช่",
      "value":"unsound"
    }
  ]
  healtyArr4 = [
    {
      "key":"ใช่",
      "value":"danger"
    },
    {
      "key":"ไม่ใช่",
      "value":"danger"
    }
  ]
  healtyArr5 = [
    {
      "key":"ใช่",
      "value":"defective"
    },
    {
      "key":"ไม่ใช่",
      "value":"defective"
    }
  ]
  parentArr1 = [
    {
      "key":"บิดา",
      "value":"parent"
    },
    {
      "key":"มารดา",
      "value":"parent"
    },
    {
      "key":"บุคคลอื่น(โปรดระบุ)",
      "value":"parent"
    },
  ]
  parentArr2 = [
    {
      "key":"มี",
      "value":"job_study"
    },
    {
      "key":"ไม่มี",
      "value":"job_study"
    }
  ]

  constructor(private addstudent : AddStudentcoreService) { }

  ngOnInit(): void {
  }

  submit(){
    this.step = this.step + 1;
  }
  back(){
    this.step = this.step - 1;
  }

  //functioncheckbox
  //talentstudent
  readwrite(event){
    const index = this.read_write.indexOf(event.target.value);
    if(index == -1){
      this.read_write.push(event.target.value);
    }else{
      this.read_write.splice(index,1);
    }
  }
  understand(event){
    const index = this.understandTalent.indexOf(event.target.value);
    if(index == -1){
      this.understandTalent.push(event.target.value);
    }else{
      this.understandTalent.splice(index,1);
    }
  }

  //studentdetail
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

  //healty

  //addstudentcore
  addstudentcore(){
    this.addstudent.addstudent(this.addstudents).subscribe(res1 => {
      console.log(res1);
    });
    this.addstudent.healtystudent(this.healty).subscribe(res2 => {
      console.log(res2);
    });
    this.addstudent.parentstudent(this.parent).subscribe(res3 => {
      console.log(res3);
    });
    this.addstudent.studentdetail(this.studentdetail).subscribe(res4 => {
      console.log(res4);
    });
    this.addstudent.talentstudent(this.talent).subscribe(res5 => {
      console.log(res5);
    });
    this.addstudent.studentcore(this.studentcore).subscribe(res6 => {
      console.log(res6);
    });
  }
}
