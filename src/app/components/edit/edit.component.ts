import { SortNewstudentService } from './../../services/sort-new-student-services/sort-newstudent.service';
import { test } from './../../models/test';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  T : test[] = [];

  constructor(private http: HttpClientModule, private sn : SortNewstudentService) { }

  ngOnInit(): void {

  }




}
