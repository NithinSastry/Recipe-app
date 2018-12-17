import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input("recipeItem")
  recipe: {name : string, description: string, imagePath : string};
  constructor() { }

  @Output("recipeClick")
  recipeClick: EventEmitter<void> = new EventEmitter<void>();
  ngOnInit() {
  }

  onSelect(recipe: Recipe){
    this.recipeClick.emit();
  }

}
