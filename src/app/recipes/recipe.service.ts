import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
     recipeSelected = new EventEmitter<Recipe>();
     private recipes: Recipe[] = [
          new Recipe("test", "test desc", "", [new Ingredient("buns", 1), new Ingredient("fries", 20)]),
          new Recipe("test1", "test desc", "", [new Ingredient("stick", 1), new Ingredient("fruits", 20)]),
          new Recipe("test2", "test desc", "", [new Ingredient("sauce", 1), new Ingredient("tomatoes", 20)]),
     ];

     public getRecipes() {
          return this.recipes.slice();
     }

     public getRecipe(index: number) {
          return this.recipes[index];
     }
}