import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { test1 } from 'src/app/models/test1';
import { test3 } from 'src/app/models/test3';
import { ToastrService } from 'ngx-toastr';
import { TestService } from 'src/app/services/test/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  preview: any = 1;
  testadd = new test1();
  get: any;
  files:any;
  submitted = false;
  form: FormGroup;
  test3 = new test3();
  data:any;

  constructor(private toastr: ToastrService, private formBuilder: FormBuilder, private ts: TestService) { }

  ngOnInit(): void {
    //this.getAll();
    this.createForm();
  }

  onSubmit(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    const formData = new FormData();
    formData.append("name", this.files, this.files.names);

    this.ts.uploadData(formData).subscribe(res => {
      this.data = res;
      console.log(this.data);
    });
  }

  get f(){
    return this.form.controls;
  }

  uploadImage(event){
    this.files = event.target.files[0]
    console.log(this.files);
  }

  createForm(){
    this.form = this.formBuilder.group({
      name: [null, Validators.required]
    })
  }

  previewadd(){
    //this.preview = this.preview + 1;
    this.testadd;
    console.log(this.testadd);
  }
  getAll(){
    this.get = this.previewadd();
    console.log(this.get);
  }

}
