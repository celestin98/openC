import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title = '';
  @Input() content = '';
  @Input() loveIts = 0;
  @Input() created_at= Date.now();


constructor()
{
}

ngOnInit()
:
void {}

}
