import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
     ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
     private ingredients: Ingredient[] = [
          new Ingredient("apples", 5),
          new Ingredient("tomatoes", 10)
     ];

     addIngredient(ingredient: Ingredient) {
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
     }

     getIngredients() {
          return this.ingredients.slice();
     }
}