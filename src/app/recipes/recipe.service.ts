import { Recipe } from './recipe.model';

export class RecipeService {
     private recipes: Recipe[] = [
          new Recipe("test", "test desc", ""),
          new Recipe("test1", "test desc", ""),
          new Recipe("test2", "test desc", ""),
     ];

     getRecipes(){
          return this.recipes.slice();
     }
}