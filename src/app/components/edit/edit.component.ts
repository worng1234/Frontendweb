import { test1 } from './../../models/test1';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test/test.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {



  constructor(private http: HttpClientModule, private t : TestService) { }

  ngOnInit(): void {


  }
  addTest(addtest1,addtest2){
    this.t.savetest1(addtest1);
    this.t.savetest2(addtest2);
  }



}
