import { Component, OnInit } from '@angular/core';

import {ICard} from "../../interfaces";
import {CardService} from "../../services";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: ICard[];

  constructor(private cardService:CardService) { }

  ngOnInit(): void {

    this.cardService.getAll().subscribe(value => this.cards = value);

  }

}
