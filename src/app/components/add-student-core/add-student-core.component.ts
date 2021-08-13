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
  step: any = 1;
  addstudents = new Addressstudent();
  healty = new Healtystudent();
  parent = new Parentstudent();
  studentdetail = new Studentdetail();
  studentcore = new Studentcore();
  talent = new Talentstudent();

  talentArr1 = [
    {
      "key":"อ่านเขียนคล่อง",
      "value":"read_write"
    },
    {
      "key":"อ่านเขียนไม่คล่อง",
      "value":"read_write"
    },
    {
      "key":"อ่านเขียนได้",
      "value":"read_write"
    },
    {
      "key":"อ่านเขียนไม่ได้",
      "value":"read_write"
    },
  ]
  talentArr2 = [
    {
      "key":"ใช่",
      "value":"understand"
    },
    {
      "key":"ไม่ใช่",
      "value":"understand"
    },
  ]
  studentdetailArr1 = [
    {
      "key":"มือถือ/สมาร์ทโฟน",
      "value":"gadject1"
    },
    {
      "key":"แท็บเล็ต",
      "value":"gadject2"
    },
    {
      "key":"โน๊ตบุค",
      "value":"gadject3"
    },
    {
      "key":"คอมพิวเตอร์",
      "value":"gadject4"
    },
  ]
  studentdetailArr2 = [
    {
      "key":"อินเตอร์เน็ตมือถือ",
      "value":"internet1"
    },
    {
      "key":"อินเตอร์เน็ตสาย",
      "value":"internet2"
    },
  ]
  studentdetailArr3 = [
    {
      "key":"ขาดแคลนแบบเรียน",
      "value":"lack1"
    },
    {
      "key":"ขาดแคลนเครื่องเขียน",
      "value":"lack2"
    },
    {
      "key":"ขาดแคลนอาหารกลางวัน",
      "value":"lack3"
    },
    {
      "key":"ขาดแคลนเครื่องแบบ",
      "value":"lack4"
    },
    {
      "key":"ไม่ขาดแคลน",
      "value":"lack5"
    },
  ]
  studentdetailArr4 = [
    {
      "key":"ใช่",
      "value":"friend_drug"
    },
    {
      "key":"ไม่ใช่",
      "value":"friend_drug"
    }
  ]
  studentdetailArr5 = [
    {
      "key":"ใช่",
      "value":"sexual"
    },
    {
      "key":"ไม่ใช่",
      "value":"sexual"
    }
  ]
  studentdetailArr6 = [
    {
      "key":"ใช่",
      "value":"dark_travel"
    },
    {
      "key":"ไม่ใช่",
      "value":"dark_travel"
    }
  ]
  studentdetailArr7 = [
    {
      "key":"ใช่",
      "value":"sell_drug"
    },
    {
      "key":"ไม่ใช่",
      "value":"sell_drug"
    }
  ]
  studentdetailArr8 = [
    {
      "key":"ใช่",
      "value":"not_parent"
    },
    {
      "key":"ไม่ใช่",
      "value":"not_parent"
    }
  ]
  studentdetailArr9 = [
    {
      "key":"น่าอยู่",
      "value":"cute_world"
    },
    {
      "key":"ไม่น่าอยู่",
      "value":"cute_world"
    }
  ]
  studentdetailArr10 = [
    {
      "key":"มีค่า",
      "value":"rich_man"
    },
    {
      "key":"ไม่มีค่า",
      "value":"rich_man"
    }
  ]
  studentdetailArr11 = [
    {
      "key":"ครอบครัว",
      "value":"problem1"
    },
    {
      "key":"การเรียน",
      "value":"problem2"
    },
    {
      "key":"สุขภาพ",
      "value":"problem3"
    },
    {
      "key":"เศรษฐกิจ",
      "value":"problem4"
    },
    {
      "key":"การคบเพื่อน",
      "value":"problem5"
    },
    {
      "key":"การวางตัวในสังคม",
      "value":"problem6"
    },
    {
      "key":"การใช้เวลาว่าง",
      "value":"problem7"
    },
    {
      "key":"การเลือกอาชีพ",
      "value":"problem8"
    },
    {
      "key":"การเลือกศึกษาต่อ",
      "value":"problem9"
    },
    {
      "key":"การปรับตัวเข้ากับครู-อาจารย์ในโรงเรียน",
      "value":"problem10"
    },
  ]
  studentdetailArr12 = [
    {
      "key":"บิดา",
      "value":"help1"
    },
    {
      "key":"มารดา",
      "value":"help2"
    },
    {
      "key":"ครูแนะแนว",
      "value":"help3"
    },
    {
      "key":"ครูที่ปรึกษา",
      "value":"help4"
    },
    {
      "key":"เพื่อน",
      "value":"help5"
    },
    {
      "key":"อื่นๆ",
      "value":"help6"
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
