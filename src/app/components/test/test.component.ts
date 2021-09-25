import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { test1 } from 'src/app/models/test1';
import { test3 } from 'src/app/models/test3';
import { ToastrService } from 'ngx-toastr';
import { TestService } from 'src/app/services/test/test.service';
import { HttpEventType, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  preview: any = 1;
  ttt = new test1();
  get: any;
  files:any;
  submitted = false;
  form: FormGroup;
  test3 = new test3();
  data:any;
  public progress: number;
  selected: File = null;

  imageSrc: string;
   myForm = new FormGroup({
    idNumber: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private toastr: ToastrService, private formBuilder: FormBuilder, private ts: TestService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:  new FormControl(''),
      surname: new FormControl(''),
    });
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.ts.create(this.form.value).subscribe(res => {
         console.log(res);
         //this.router.navigateByUrl('person/index');
    })
  }

  onfilechang(event){
    this.selected = <File>event.target.files[0];
  }

  onupload(){
    const fd = new FormData();
    fd.append('image', this.selected, this.selected.name);
    fd.append('name', this.ttt.name);
    this.http.post('http://127.0.0.1:8000/api/imageUp', fd).subscribe(res => {
      console.log(res);
    });
  }
  // onSubmit(){
  //   this.submitted = true;
  //   if(this.form.invalid){
  //     return;
  //   }
  //   const formData = new FormData();
  //   formData.append('image', this.files, this.files.name);

  //   this.http.post('http://127.0.0.1:8000/api/uploadImage',formData, {reportProgress: true, observe: 'events'}).subscribe(res => {
  //     this.data = res;
  //     console.log(this.data);
  //   });
  // }

  // get f(){
  //   return this.form.controls;
  // }

  // uploadImage(event){
  //   this.files = event.target.files[0]
  //   console.log(this.files);
  // }

  // createForm(){
  //   this.form = this.formBuilder.group({
  //     image: [null, Validators.required]
  //   })
  // }



}
