import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
     ingredientsChanged = new Subject<Ingredient[]>();
     private ingredients: Ingredient[] = [
          new Ingredient("apples", 5),
          new Ingredient("tomatoes", 10)
     ];

     addIngredient(ingredient: Ingredient) {
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice());
     }

     getIngredients() {
          return this.ingredients.slice();
     }

     addIngredientToShoppingList(ingredients: Ingredient[]) {
          this.ingredients.push(...ingredients);
          this.ingredientsChanged.next(this.ingredients.slice());
     }
}