import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
     recipesChanged = new Subject<Recipe[]>();

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

     public addRecipe(recipe: Recipe){
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());
     }

     public updateRecipe(index, newRecipe: Recipe){
          this.recipes[index] = newRecipe;
          this.recipesChanged.next(this.recipes.slice());
     }

     public removeRecipe(index: number){
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
     }
}