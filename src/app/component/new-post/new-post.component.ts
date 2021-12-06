import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm=new FormGroup({
    title: new FormControl(''),
    content: new  FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.postForm.getRawValue())
  }

}
