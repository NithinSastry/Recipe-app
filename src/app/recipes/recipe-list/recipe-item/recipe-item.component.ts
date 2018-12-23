import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input("recipeItem")
  recipe: Recipe;
  @Input()
  index: number;
  constructor(private route: ActivatedRoute, private router:Router) { }

  // @Output("recipeClick")
  // recipeClick: EventEmitter<void> = new EventEmitter<void>();
  ngOnInit() {
  }

  // onSelect() {
  //   //this.recipeClick.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
