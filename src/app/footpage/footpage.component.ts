import { Component, OnInit } from '@angular/core';
import { Food } from '../share/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-footpage',
  templateUrl: './footpage.component.html',
  styleUrls: ['./footpage.component.css']
})
export class FootpageComponent implements OnInit {

  food!: Food;

  constructor(private activitedRoute: ActivatedRoute, private foodService: FoodService) {
    activitedRoute.params.subscribe((pararms) => {
      if (pararms['id'])
        this.food = foodService.getFoodById(pararms['id']);
    })
   }

  ngOnInit(): void {
  }

}
