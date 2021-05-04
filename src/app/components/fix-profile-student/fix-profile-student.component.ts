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

  constructor(private aRoute: ActivatedRoute,
              private sci: StudentCoreInformationService,
              private fb: FormBuilder,
              private router: Router) {}

  ngOnInit(): void {
    this.message='';
    this.getStudentListID(this.aRoute.snapshot.paramMap.get('id'));
  }

  getStudentListID(id): void{
    this.sci.getStudentListID(id).subscribe(data =>{
      this.currentStudent = data;
      console.log(data);
    },error =>{
      console.log(error);
    });
  }

  updateProfilestudent(): void {
    this.sci.updateProfilestudent(this.currentStudent.id, this.currentStudent)
    .subscribe(response =>{
      console.log(response);
      this.message = 'Success update student';
    },error =>{
      console.log(error);
    })
  }

}


