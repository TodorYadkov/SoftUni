import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/models/comment.interfaces';

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.css']
})
export class DeleteCommentComponent {

  @Input() commentDetails!: IComment;
}
