import { AddBehaviorService } from './../../services/add-behavior/add-behavior.service';
import { BerhaviorService } from './../../services/behaviorservice/berhavior.service';
import { Addbehavior } from 'src/app/models/add-behavior-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-behavior',
  templateUrl: './add-behavior.component.html',
  styleUrls: ['./add-behavior.component.css']
})
export class AddBehaviorComponent implements OnInit {
  behavior = new Addbehavior();

  constructor(private bh : AddBehaviorService, private router : Router) { }

  ngOnInit(): void {
  }

  AddBehavior(){
    this.bh.addBehavior(this.behavior).subscribe(res => {
      console.log(res);
    })
  }
}
