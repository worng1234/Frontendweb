import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentInformationCore } from 'src/app/models/student-information-core';
import { StudentCoreInformationService } from 'src/app/services/student_core_information_services/student-core-information.service';

@Component({
  selector: 'app-fix-profile-student',
  templateUrl: './fix-profile-student.component.html',
  styleUrls: ['./fix-profile-student.component.css']
})
export class FixProfileStudentComponent implements OnInit {
  currentStudent = null;
  message ='';
  studentcore = null;
  addressstudent = null;
  healtystudent = null;
  parentstudent = null;
  studentdetail = null;
  talentstudent = null;

  constructor(private aRoute: ActivatedRoute,
              private sci: StudentCoreInformationService,
              private fb: FormBuilder,
              private router: Router) {}

  ngOnInit(): void {
    this.message='';
    this.getStudentListID(this.aRoute.snapshot.paramMap.get('id'));
  }

  getStudentListID(id): void{
    this.sci.studentcoreID(id).subscribe(data =>{
      this.studentcore = data;
      console.log(data);
    },error =>{
      console.log(error);
    });

    this.sci.addressstudentID(id).subscribe(data =>{
      this.addressstudent = data;
      console.log(data);
    },error =>{
      console.log(error);
    });

    this.sci.healtystudentID(id).subscribe(data =>{
      this.healtystudent = data;
      console.log(data);
    },error =>{
      console.log(error);
    });

    this.sci.studentdetailID(id).subscribe(data =>{
      this.studentdetail = data;
      console.log(data);
    },error =>{
      console.log(error);
    });

    this.sci.parentstudentID(id).subscribe(data =>{
      this.parentstudent = data;
      console.log(data);
    },error =>{
      console.log(error);
    });

    this.sci.talentstudentID(id).subscribe(data =>{
      this.talentstudent = data;
      console.log(data);
    },error =>{
      console.log(error);
    });
  }

  updateProfilestudent(): void {
    this.sci.studentcoreUpdate(this.studentcore.id, this.studentcore)
    .subscribe(response =>{
      console.log(response);
      this.message = 'Success update student';
    },error =>{
      console.log(error);
    });

    this.sci.addressstudentUpdate(this.addressstudent.id, this.addressstudent)
    .subscribe(response =>{
      console.log(response);
      this.message = 'Success update student';
    },error =>{
      console.log(error);
    });

    this.sci.healtystudentUpdate(this.healtystudent.id, this.healtystudent)
    .subscribe(response =>{
      console.log(response);
      this.message = 'Success update student';
    },error =>{
      console.log(error);
    });

    this.sci.studentdetailUpdate(this.studentdetail.id, this.studentdetail)
    .subscribe(response =>{
      console.log(response);
      this.message = 'Success update student';
    },error =>{
      console.log(error);
    });

    this.sci.parentstudentUpdate(this.parentstudent.id, this.parentstudent)
    .subscribe(response =>{
      console.log(response);
      this.message = 'Success update student';
    },error =>{
      console.log(error);
    });

    this.sci.talentstudentUpdate(this.talentstudent.id, this.talentstudent)
    .subscribe(response =>{
      console.log(response);
      this.message = 'Success update student';
    },error =>{
      console.log(error);
    });
  }

}


