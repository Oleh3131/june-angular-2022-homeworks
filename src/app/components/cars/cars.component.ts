import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ICar} from "../../interfaces";
import {CarService} from "../../services";


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[];
  form: FormGroup;
  updateCar: ICar | null;

  constructor(private carService: CarService) {

    this.initForm()

  }

  ngOnInit(): void {

    this.carService.getAll().subscribe(value => this.cars = value);

  }

  initForm(): void {

    this.form = new FormGroup({

      model: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-ZА-яёЁіІїЇґҐєЄ\s]{1,20}$/)]),
      price: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(1000000)]),
      year: new FormControl(null, [Validators.required, Validators.min(1990), Validators.max(new Date().getFullYear())])

    })

  }

  save(): void {

    if (!this.updateCar) {

      this.carService.create(this.form.value).subscribe(value => {

        this.cars.push(value)

      })
    } else {

      this.carService.updateById(this.updateCar.id, this.form.value).subscribe(value => {

        const car = this.cars.find(car => car.id === this.updateCar?.id);

        Object.assign(car!, value);

        this.updateCar = null;

      })

    }

    this.form.reset()

  }

  lift(car: ICar) {

    this.updateCar = car;

    this.form.setValue({

      model: car.model,
      price: car.price,
      year: car.year

    })

  }

  delete(id: number) {

    this.carService.deleteById(id).subscribe(()=>{

      const index = this.cars.findIndex(car => car.id === id);

      this.cars.splice(index, 1);

    })

  }
}
