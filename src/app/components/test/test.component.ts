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
  testadd = new test1();
  get: any;
  files:any;
  submitted = false;
  form: FormGroup;
  test3 = new test3();
  data:any;
  public progress: number;

  imageSrc: string;
   myForm = new FormGroup({
    idNumber: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private toastr: ToastrService, private formBuilder: FormBuilder, private ts: TestService,
    private http: HttpClient) { }

  ngOnInit(): void {
    //this.getAll();
    //this.createForm();
  }
  get f(){
    return this.myForm.controls;
  }

  onFileChange(event) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [image] = event.target.files;
      reader.readAsDataURL(image);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.myForm.patchValue({
          fileSource: reader.result
        });

      };

    }
  }

  submit(){
    console.log(this.myForm.value);
    this.http.post('http://127.0.0.1:8000/api/uploadimage/', this.myForm.value)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
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
