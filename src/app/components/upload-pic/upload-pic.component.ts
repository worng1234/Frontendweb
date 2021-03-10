import { NewStudentM1Service } from './../../services/new-student-m1-services/new-student-m1.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-upload-pic',
  templateUrl: './upload-pic.component.html',
  styleUrls: ['./upload-pic.component.css']
})
export class UploadPicComponent implements OnInit {
  public message: string;
  public progress: number;
  @Output() public onUploadFinished = new EventEmitter();


  constructor(private http: HttpClient, public nm1s: NewStudentM1Service) { }

  ngOnInit(): void {
  }

  public uploadFile = (files) =>{
    if(files.length === 0){
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('https://localhost:44342/api/Upload', formData,{ reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if(event.type === HttpEventType.UploadProgress){
        this.progress = Math.round(100* event.loaded / event.total);
      }
      else if(event.type === HttpEventType.Response){
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }
    });

  }

  addNewstudentm1(newstudentm1){
    this.nm1s.addNewstudentm1(newstudentm1);
  }

}
