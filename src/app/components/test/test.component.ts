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
  imageDirectoryPath:any = 'http://127.0.0.1:8000/storage/newstudentm1PIC/';
  pdfFilePath:any = 'http://127.0.0.1:8000/storage/newstudentm1PDF/';



  constructor(private toastr: ToastrService, private formBuilder: FormBuilder, private ts: TestService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getAll();
  }
  get f(){
    return this.form.controls;
  }


  onfilechang(event){
    this.selected = <File>event.target.files[0];
  }

  onupload(){
    const fd = new FormData();
    fd.append('image', this.selected, this.selected.name);
    fd.append('file_pdf', this.selected, this.selected.name);
    fd.append('name', this.ttt.name);
    this.http.post('http://127.0.0.1:8000/api/imageUp', fd).subscribe(res => {
      console.log(res);
    });
  }

  getAll(){
    this.http.get('http://127.0.0.1:8000/api/getall').subscribe(res => {
      this.get = res;
      console.log(this.get);
    })
  }

}
