import { Component, OnInit } from '@angular/core';
import { Food } from '../share/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-footpage',
  templateUrl: './footpage.component.html',
  styleUrls: ['./footpage.component.css']
})
export class FootpageComponent implements OnInit {

  food!: Food;

  constructor(private activitedRoute: ActivatedRoute, private foodService: FoodService, private cartService: CartService, private router: Router) {
    activitedRoute.params.subscribe((pararms) => {
      if (pararms['id'])
        this.food = foodService.getFoodById(pararms['id']);
    })
   }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
