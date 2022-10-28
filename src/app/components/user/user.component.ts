import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUser} from "../../interfaces";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;


  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
  }


  getDetails():void {

    // this.router.navigate([this.user.id],{relativeTo:this.activatedRoute})

  //  також в extras можна передавати state і отримаємо ті ж самі результати що ми передавали по url
  //  тобто нічого перезагружатися не буде

    this.router.navigate([this.user.id],{

      relativeTo:this.activatedRoute,
      state: {user:this.user}

    })

  }
}
