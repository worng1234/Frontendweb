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

  //test = new test1();
  selectcheck:any = [];
  checkboxArr = [
    {
      "key":"j",
      "value":"ใช่"
    },
    {
      "key":"j",
      "value":"ไม่ใช่"
    },
    {
      "key":"j",
      "value":"j"
    },
  ]


  constructor(private http: HttpClientModule, private t : TestService) { }

  ngOnInit(): void {


  }

  testchange(event){
    const index = this.selectcheck.indexOf(event.target.value);
    if(index == -1){
      this.selectcheck.push(event.target.value);
    }else{
      this.selectcheck.splice(index,1);
    }
    //console.log(this.selectcheck);
  }

  // addtest(){
  //   this.test.CheckBox = this.selectcheck.toString();
  //   console.log(this.test.CheckBox);
  //   this.t.checkboxtest(this.test).subscribe(res =>{
  //     console.log(res);
  //   })
  // }

}
