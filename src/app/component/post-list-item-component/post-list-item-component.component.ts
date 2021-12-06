import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Post} from "../../model/post";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post = {loveIts: 0};


  constructor(private postservice: PostService) {
  }

  ngOnInit(): void {
  }

  deletepost(){
    this.postservice.deletePost(this.post);
  }

}
