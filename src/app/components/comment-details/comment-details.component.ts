import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {CommentService} from "../../services";
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  @Input()
  comment: IComment

  constructor( private router: Router, private activatedRoute: ActivatedRoute, private commentService: CommentService) {

    this.activatedRoute.params.subscribe(({id}) => {

      this.comment = this.router.getCurrentNavigation()?.extras.state?.['comment']

      if (!this.comment) {

        this.commentService.getById(id).subscribe(value => this.comment = value);

      }

    })


}

ngOnInit()
:
void {}

}
