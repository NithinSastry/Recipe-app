import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input("recipeItem")
  recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  // @Output("recipeClick")
  // recipeClick: EventEmitter<void> = new EventEmitter<void>();
  ngOnInit() {
  }

  onSelect() {
    //this.recipeClick.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
