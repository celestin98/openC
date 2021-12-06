import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Post} from "../model/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    {
      title: 'test1',
      content: 'Lorem ipsum dolor sit amet. Qui alias error 33 deserunt quas ut' +
        ' voluptatibus cupiditate aut facere soluta. Nemo voluptatem ut reiciendis quas' +
        ' non provident atque nam blanditiis provident vel voluptates facere eum quasi' +
        ' dignissimos possimus nesciunt. ',
      loveIts: 0,
      created_at:Date.now()
    },
    {
      title: 'test2',
      content: 'Lorem ipsum dolor sit amet. Qui alias error 33 deserunt quas ut' +
        ' voluptatibus cupiditate aut facere soluta. Nemo voluptatem ut reiciendis quas' +
        ' non provident atque nam blanditiis provident vel voluptates facere eum quasi' +
        ' dignissimos possimus nesciunt. ',
      loveIts: 0,
      created_at: Date.now()
    }
  ]
  postsubject= new Subject<any>();
  emitPostSubject(){
    this.postsubject.next(this.posts.slice());

  }
  constructor() {
    this.emitPostSubject();
  }

  addPost(post:any){
    this.posts.push(post);
    this.emitPostSubject();
  }
  deletePost(post:any){
    this.posts.splice(this.posts.indexOf(post),1);
    this.emitPostSubject();

  }
}
