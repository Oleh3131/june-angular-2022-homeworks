import {Component, Input, OnInit} from '@angular/core';
import {ICard} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {CardsService} from "../../services";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  card: ICard;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private cardsService:CardsService) { }

  ngOnInit(): void {
  }

  getDetails():void {

    this.router.navigate([this.card.id],{

      relativeTo:this.activatedRoute,
      state:{card:this.card}

    })

  }
}
