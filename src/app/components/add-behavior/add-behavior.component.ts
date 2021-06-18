import { AddBehaviorService } from './../../services/add-behavior/add-behavior.service';
import { BerhaviorService } from './../../services/behaviorservice/berhavior.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-behavior',
  templateUrl: './add-behavior.component.html',
  styleUrls: ['./add-behavior.component.css']
})
export class AddBehaviorComponent implements OnInit {

  constructor(private bh : AddBehaviorService, private router : Router) { }

  ngOnInit(): void {
  }

  AddBehavio(addbehavior){
    this.bh.AddBehavior(addbehavior);
  }
}
