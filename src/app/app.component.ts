import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'openC';
  posts = [
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

}
