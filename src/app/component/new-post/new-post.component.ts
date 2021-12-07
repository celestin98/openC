import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PostService} from "../../service/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  })

  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.postService.addPost(
      {
        title: this.postForm.getRawValue().title,
        content: this.postForm.getRawValue().content,
        loveIts: 0,
        created_at: Date.now()
      }
    )
    this.router.navigate(['exercice1'])
  }

}
