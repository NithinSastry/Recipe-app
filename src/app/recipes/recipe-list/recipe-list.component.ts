import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("test", "test desc", ""),
    new Recipe("test1", "test desc", ""),
    new Recipe("test2", "test desc", ""),
  ];

  @Output("recipeListItemClicked")
  recipeListItemClicked: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeItemClicked(recipe: Recipe){
    this.recipeListItemClicked.emit(recipe);
  }
}
