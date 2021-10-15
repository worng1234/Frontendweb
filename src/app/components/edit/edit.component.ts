import { test1 } from './../../models/test1';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TestService } from 'src/app/services/test/test.service';
import { ActivatedRoute } from '@angular/router';
// import Swal from 'sweetalert2';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  data: any;
  id: any;
  test = new test1();
  imageDirectoryPath:any = 'http://127.0.0.1:8000/storage/newstudentm1PIC/';
  faWrench = faWrench;

  constructor(private http: HttpClientModule, private t : TestService, private aRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    console.log(this.aRoute.snapshot.params.id);
    this.id = this.aRoute.snapshot.params.id;
    this.testID();

  }

  // alertWithSuccess(){
  //   Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  // }

  testID(){
    this.t.testID(this.id).subscribe(res => {
      this.data = res;
      this.test = this.data;
    })
  }

  // testchange(event){
  //   const index = this.selectcheck.indexOf(event.target.value);
  //   if(index == -1){
  //     this.selectcheck.push(event.target.value);
  //   }else{
  //     this.selectcheck.splice(index,1);
  //   }
  //   //console.log(this.selectcheck);
  // }

  // addtest(){
  //   this.test.CheckBox = this.selectcheck.toString();
  //   console.log(this.test.CheckBox);
  //   this.t.checkboxtest(this.test).subscribe(res =>{
  //     console.log(res);
  //   })
  // }

}
