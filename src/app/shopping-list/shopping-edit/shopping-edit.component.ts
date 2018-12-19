import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @Output("addIngredient")
  // addIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  
  ingredientName: string;
  ingredientQuantity: number;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

  }

  onAddClicked() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    //this.addIngredient.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
