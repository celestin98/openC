import { Component, OnInit } from '@angular/core';
import {PostService} from "../../service/post.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {
  post: any[]=[];
  postSubscription: Subscription;

  constructor(private postService: PostService) {
    this.postSubscription = this.postService.postsubject.subscribe(
      (posts: any[]) => {
        this.post = posts;
      }
    );
    this.postService.emitPostSubject();
  }


    ngOnInit(): void {

  }

}
