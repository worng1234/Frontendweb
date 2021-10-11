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

  step:any = 1;

  //form&model
  prename = ['','เด็กชาย','เด็กหญิง','นาย','นางสาว'];

  prename_parent = ['','นาย','นางสาว' ,'นาง'];

  type_id_card = ['','บัตรประจำตัวประชาชน','บัตรประจำตัวคนซึ่งไม่มีสัญชาติไทย','บัตรประจำตัวบุคคลที่ไม่มีสถานะทางทะเบียน'];

  prenameEng = ['','Mr.','Mrs.'];

  gender = ['','ชาย','หญิง'];

  classList = ['','1','2','3','4','5','6'];

  roomList = ['','1','2','3','4','5','6','7','8','9','10'];

  major = ['','วิทยาศาสตร์-คณิตศาสตร์','ศิลป์-จีน','ศิลป์-คำนวณ',
          'คหกรรม','เกษตร','ปวช','ศิลป์-พละ','ศิลป์-วาด',
          'วิทยาศาสตร์-คอมพิวเตอร์','ศิลป์-ฝรั่งเศษ'];

  days = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'
          ,'16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];

  mounths = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤษจิกายน','ธันวาคม'];

  years = ['2540','2541','2542','2543','2544','2545','2546','2547','2548','2549','2550','2551',
            '2552','2553','2554','2555','2556','2557','2558','2559','2560','2561','2562','2563','2564'];

  bloodgroups = ['A','B','O','AB'];

  goSchool = ['เดินเท้า','รถจักรยาน','รถจักรยานยนต์','รถเดือน','พ่อแม่มาส่ง'];

  Disable = ['ไม่มี','การมองเห็น','การได้ยิน','สติปัญญา','ร่างกาย/สุขภาพ','การเรียนรู้','การพูด/ภาษา','พฤติกรรม/อารมณ์','ออทิสติก','พิการซ้ำซ้อน'];

  unFortuned = ['ไม่มี','ถูกบังคับขายแรงงาน','อยู่ในธุรกิจทางเพศ','ถูกทอดทิ้ง','เด็กเร่ร่อน','ได้รับผลกระทบจากเอดส์','ชนกลุ่มน้อย','ถูกทำร้ายทารุณ',
                'เด็กยากจน','เด็กที่มีปัญหาเกี่ยวกับยาเสพติด','เด็กกำพร้า','ทำงานรับผิดชอบตนเองและครอบครัว'];

  salary_parent = ['','0 - 9000', '9,001 - 15,000', '15,001 - 30,000', '30,001 - 50,000', '50,001 - 100,000', '100,001 - 300,000'];

  parents = ['พี่ชาย','พี่สาว','ลุง','ป้า','น้า','อา','ปู่','ย่า','ตา','ยาย'];

  parents_status = ['','สมรส','หย่าร้าง'];

  num_blood = [0,1,2,3,4,5,6,7,8,9,10];

  num_brother = [0,1,2,3,4,5,6,7,8,9,10];

  num_son = [0,1,2,3,4,5,6,7,8,9,10];

  num_sister = [0,1,2,3,4,5,6,7,8,9,10];

  num_son2 = [0,1,2,3,4,5,6,7,8,9,10];

  num_parent = [0,1,2,3,4,5,6,7,8,9,10];

  num_study = [0,1,2,3,4,5,6,7,8,9,10];

  num_job = [0,1,2,3,4,5,6,7,8,9,10];

  num_house = [0,1,2,3,4,5,6,7,8,9,10];

  addstudents = new Addressstudent();
  healty = new Healtystudent();
  parent = new Parentstudent();
  studentdetail = new Studentdetail();
  studentcore = new Studentcore();
  talent = new Talentstudent();


  //checkbox
  address_now:any = [];
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
  sighteyeHealty:any = [];
  glassesHealty:any = [];
  unsoundHealty:any = [];
  dangerHealty:any = [];
  defectiveHealty:any = [];
  parentStudent:any = [];
  jobstudy:any = [];

  //array
  address_nowArr = [
    {
      "key":"ที่อยู่ตามทะเบียนบ้าน",
      "value":"ที่อยู่ตามทะเบียนบ้าน"
    },
    {
      "key":"ที่อยู่อื่น",
      "value":"ที่อยู่อื่น"
    }
  ]
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
  sight_eyeArr = [
    {
      "key":"ปกติ",
      "value":"ปกติ"
    },
    {
      "key":"สายตาสั้น",
      "value":"สายตาสั้น"
    },
    {
      "key":"สายตายาว",
      "value":"สายตายาว"
    },
    {
      "key":"สายตาเอียง",
      "value":"สายตาเอียง"
    },
    {
      "key":"ตาบอดสี",
      "value":"ตาบอดสี"
    },
    {
      "key":"อื่นๆ",
      "value":"อื่นๆ"
    }
  ]
  glassesArr = [
    {
      "key":"ใช่",
      "value":"ใช่"
    },
    {
      "key":"ไม่ใช่",
      "value":"ไม่ใช่"
    }
  ]
  unsoundArr = [
    {
      "key":"ใช่",
      "value":"ใช่"
    },
    {
      "key":"ไม่ใช่",
      "value":"ไม่ใช่"
    }
  ]
  dangerArr = [
    {
      "key":"ใช่",
      "value":"ใช่"
    },
    {
      "key":"ไม่ใช่",
      "value":"ไม่ใช่"
    }
  ]
  defectiveArr = [
    {
      "key":"ใช่",
      "value":"ใช่"
    },
    {
      "key":"ไม่ใช่",
      "value":"ไม่ใช่"
    }
  ]
  parentArr = [
    {
      "key":"บิดา",
      "value":"บิดา"
    },
    {
      "key":"มารดา",
      "value":"มารดา"
    },
    {
      "key":"บุคคลอื่น(โปรดระบุ)",
      "value":"บุคคลอื่น"
    },
  ]
  job_studyArr = [
    {
      "key":"มี",
      "value":"มี"
    },
    {
      "key":"ไม่มี",
      "value":"ไม่มี"
    }
  ]

  constructor(private addstudent : AddStudentcoreService) { }

  ngOnInit(): void {
  }

  next(){
    this.step = this.step + 1;
    console.log(this.step);
  }
  back(){
    this.step = this.step - 1;
    console.log(this.step);
  }

  //functioncheckbox
  //addressstudent
  addressnow(event){
    const index = this.read_write.indexOf(event.target.value);
    if(index == -1){
      this.read_write.push(event.target.value);
    }else{
      this.read_write.splice(index,1);
    }
  }
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
  sight_eye(event){
    const index = this.sighteyeHealty.indexOf(event.target.value);
    if(index == -1){
      this.sighteyeHealty.push(event.target.value);
    }else{
      this.sighteyeHealty.splice(index,1);
    }
  }
  glasses(event){
    const index = this.glassesHealty.indexOf(event.target.value);
    if(index == -1){
      this.glassesHealty.push(event.target.value);
    }else{
      this.glassesHealty.splice(index,1);
    }
  }
  unsound(event){
    const index = this.unsoundHealty.indexOf(event.target.value);
    if(index == -1){
      this.unsoundHealty.push(event.target.value);
    }else{
      this.unsoundHealty.splice(index,1);
    }
  }
  danger(event){
    const index = this.dangerHealty.indexOf(event.target.value);
    if(index == -1){
      this.dangerHealty.push(event.target.value);
    }else{
      this.dangerHealty.splice(index,1);
    }
  }
  defective(event){
    const index = this.defectiveHealty.indexOf(event.target.value);
    if(index == -1){
      this.defectiveHealty.push(event.target.value);
    }else{
      this.defectiveHealty.splice(index,1);
    }
  }

  //parentstudent
  parent_student(event){
    const index = this.parentStudent.indexOf(event.target.value);
    if(index == -1){
      this.parentStudent.push(event.target.value);
    }else{
      this.parentStudent.splice(index,1);
    }
  }
  job_study(event){
    const index = this.jobstudy.indexOf(event.target.value);
    if(index == -1){
      this.jobstudy.push(event.target.value);
    }else{
      this.jobstudy.splice(index,1);
    }
  }

  //addstudentcore
  addstudentcore(){
    //address
    this.address_now = this.address_nowArr.toString();
    this.addstudent.addstudent(this.addstudents).subscribe(res1 => {
      console.log(res1);
    });
    //healty
    this.healty.sight_eye = this.sighteyeHealty.toString();
    this.healty.glasses = this.glassesHealty.toString();
    this.healty.unsound = this.unsoundHealty.toString();
    this.healty.danger = this.dangerHealty.toString();
    this.healty.defective = this.defectiveHealty.toString();
    this.addstudent.healtystudent(this.healty).subscribe(res2 => {
      console.log(res2);
    });
    //parent
    this.parent.parent = this.parentStudent.toString();
    this.parent.job_study = this.jobstudy.toString();
    this.addstudent.parentstudent(this.parent).subscribe(res3 => {
      console.log(res3);
    });
    //studentdetail
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
    //talent
    this.talent.read_write = this.read_write.toString();
    this.talent.understand = this.understandTalent.toString();
    this.addstudent.talentstudent(this.talent).subscribe(res5 => {
      console.log(res5);
    });
    //studentcore
    this.addstudent.studentcore(this.studentcore).subscribe(res6 => {
      console.log(res6);
    });
  }
}
