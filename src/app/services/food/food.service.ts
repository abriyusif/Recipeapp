import { Injectable } from '@angular/core';
import { Food } from 'src/app/share/models/Food';
import { Tag } from 'src/app/share/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[]{
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[]{
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 2 },
      { name: 'Pizza', count: 4 },
      { name: 'SlowFood', count: 5 },
      { name: 'Lunch', count: 6 },
      { name: 'Hamburger', count: 7 },
      { name: 'Fry', count: 8 },
      { name: 'Soup', count: 10}
    ]
  }

  getAllFoodsByTag(tag: string): Food[]{


    return tag == "All"?
      this.getAll():
    this.getAll().filter(food => food.tags?.includes(tag))
  }

  getAll(): Food[]{
    return [
      {
        id: 1,
        name: 'Kizra',
        price: 10,
        cookTime: '1 - 2',
        favorite: true,
        origins: ['Sudan'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/kizra.jpg',
        tags: ['FastFood', 'Anjera', 'Lunch'],
      },
      {
        id: 2,
        name: 'Anjera special',
        price: 20,
        cookTime: '2 - 3',
        favorite: true,
        origins: ['Ethiopia'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/anjera1.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Anjera Somali',
        price: 20,
        cookTime: '2 - 3',
        favorite: false,
        origins: ['Somalia', 'Ethiopia'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/anjerasomali.jpg',
        tags: ['Soup', 'Lunch'],
      },
      {
        id: 4,
        name: 'Anjera Somali',
        cookTime: '1 - 2',
        price: 10,
        favorite: false,
        origins: ['Ethiopia'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/anjsom.jpg',
        tags: ['Pizza', 'Anjera', 'Lunch'],
      },
      {
        id: 5,
        name: 'Bread',
        price: 20,
        cookTime: '2 - 3',
        favorite: true,
        origins: ['Sudan'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/bread.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 6,
        name: 'Chapati',
        price: 20,
        cookTime: '2 - 3',
        favorite: true,
        origins: ['Kenya'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/chapati-10.jpg',
        tags: ['FastFood', 'Lunch'],
      },
      {
        id: 7,
        name: 'Githeri',
        price: 20,
        cookTime: '2 - 3',
        favorite: false,
        origins: ['Kenya'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/githeri.jpg',
        tags: ['Lunch', 'Lunch'],
      },
      {
        id: 8,
        name: 'Ugali',
        price: 20,
        cookTime: '2 - 3',
        favorite: false,
        origins: ['Kenya'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/Ugali_&_Sukuma_Wiki.jpg',
        tags: ['FastFood', 'Lunch'],
      },
      {
        id: 9,
        name: 'Walwal',
        price: 20,
        cookTime: '2 - 3',
        favorite: false,
        origins: ['South Sudan'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/walwal.jpg',
        tags: ['Fry', 'Lunch'],
      },

      {
        id: 10,
        name: 'Asida',
        price: 20,
        cookTime: '2 - 3',
        favorite: true,
        origins: ['Sudan'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/asida.jpg',
        tags: ['Hamburger', 'Lunch'],
        love: '/assets/images/foods/love.jpg'
      }
    ]
  }
}
