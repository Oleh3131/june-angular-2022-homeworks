import { Component, OnInit } from '@angular/core';
import {ICard} from "../../interfaces";
import {CardsService} from "../../services";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: ICard[];

  constructor(private cardsService:CardsService) { }

  ngOnInit(): void {

    this.cardsService.getAll().subscribe(value => this.cards = value);

  }

}
