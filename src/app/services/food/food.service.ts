import { Injectable } from '@angular/core';
import { Food } from 'src/app/share/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[]{
    return [
      {
        id: 1,
        name: 'Sudanese Kizra',
        price: 10,
        cookTime: '1 - 2',
        favorite: false,
        origins: ['Sudan'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/kizra.jpg',
        tags: ['FastFood', 'Anjera', 'Lunch'],
        love: '/assets/images/foods/love.jpg'
      },
      {
        id: 2,
        name: 'Anjera Ethiopia 1',
        price: 20,
        cookTime: '2 - 3',
        favorite: true,
        origins: ['Ethiopia', 'African', 'Somalia '],
        stars: 4.5,
        imageUrl: '/assets/images/foods/anjera1.jpg',
        tags: ['SlowFood', 'Lunch'],
        love: '/assets/images/foods/love.jpg'
      },
      {
        id: 3,
        name: 'Anjera Somalia 1',
        price: 20,
        cookTime: '2 - 3',
        favorite: false,
        origins: ['Somalia', 'African', 'Ethiopia'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/anjerasomali.jpg',
        tags: ['FastFood', 'Lunch'],
        love: '/assets/images/foods/love.jpg'
      },
      {
        id: 4,
        name: 'Anjera Somalia 2',
        cookTime: '1 - 2',
        price: 10,
        favorite: false,
        origins: ['Ethiopia'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/anjsom.jpg',
        tags: ['FastFood', 'Anjera', 'Lunch'],
        love: '/assets/images/foods/love.jpg'
      },
      {
        id: 5,
        name: 'Bread',
        price: 20,
        cookTime: '2 - 3',
        favorite: true,
        origins: ['Ethiopia', 'African', 'Somalia '],
        stars: 4.5,
        imageUrl: '/assets/images/foods/bread.jpg',
        tags: ['SlowFood', 'Lunch'],
        love: '/assets/images/foods/love.jpg'
      },
      {
        id: 6,
        name: 'Chapati',
        price: 20,
        cookTime: '2 - 3',
        favorite: false,
        origins: ['Somalia', 'African', 'Ethiopia'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/chapati-10.jpg',
        tags: ['FastFood', 'Lunch'],
        love: '/assets/images/foods/love.jpg'
      },
      {
        id: 7,
        name: 'Githeri',
        price: 20,
        cookTime: '2 - 3',
        favorite: true,
        origins: ['Ethiopia', 'African', 'Somalia '],
        stars: 4.5,
        imageUrl: '/assets/images/foods/githeri.jpg',
        tags: ['SlowFood', 'Lunch'],
        love: '/assets/images/foods/love.jpg'
      },
      {
        id: 8,
        name: 'Ugali',
        price: 20,
        cookTime: '2 - 3',
        favorite: false,
        origins: ['Somalia', 'African', 'Ethiopia'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/Ugali_&_Sukuma_Wiki.jpg',
        tags: ['FastFood', 'Lunch'],
        love: '/assets/images/foods/love.jpg'
      },
      {
        id: 9,
        name: 'South Sudan Walwal',
        price: 20,
        cookTime: '2 - 3',
        favorite: false,
        origins: ['Somalia', 'African', 'Ethiopia'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/walwal.jpg',
        tags: ['FastFood', 'Lunch'],
        love: '/assets/images/foods/love.jpg'
      },

      {
        id: 10,
        name: 'Sudanese Asida',
        price: 20,
        cookTime: '2 - 3',
        favorite: false,
        origins: ['Somalia', 'African', 'Ethiopia'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/asida.jpg',
        tags: ['FastFood', 'Lunch'],
        love: '/assets/images/foods/love.jpg'
      }
    ]
  }
}
