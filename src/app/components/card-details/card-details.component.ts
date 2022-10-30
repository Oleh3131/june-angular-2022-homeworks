import {Component, OnInit} from '@angular/core';
import {ICard} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {CardsService} from "../../services";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  card: ICard;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cardsService: CardsService) {

    this.activatedRoute.params.subscribe(({id}) => {

      this.card = this.router.getCurrentNavigation()?.extras.state?.['card'];

      if (!this.card) {

        this.cardsService.getById(id).subscribe(value => this.card = value);

      }

    })


  }

  ngOnInit(): void {

  }

}
