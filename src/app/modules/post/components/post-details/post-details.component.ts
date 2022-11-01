import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  @Input()
  post: IPost;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private postService:PostService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id})=>{

      this.postService.getById(id).subscribe(value => this.post = value);

    })

  }

}
