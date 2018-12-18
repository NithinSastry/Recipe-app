import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipes: Recipe[] = [
  //   new Recipe("test", "test desc", ""),
  //   new Recipe("test1", "test desc", ""),
  //   new Recipe("test2", "test desc", ""),
  // ];
  recipes: Recipe[];

  @Output("recipeListItemClicked")
  recipeListItemClicked: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeItemClicked(recipe: Recipe) {
    this.recipeListItemClicked.emit(recipe);
  }
}
