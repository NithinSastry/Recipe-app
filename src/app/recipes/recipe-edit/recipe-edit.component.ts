import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  allowEdit: boolean = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeServe: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.allowEdit = params['id'] != null ? true : false;
      this.initForm();
    });
  }

  initForm() {
    let name = "";
    let imageUrl = "";
    let recipeDescription = "";
    let recipeIngredients = new FormArray([]);

    if (this.allowEdit) {
      const recipe = this.recipeServe.getRecipe(this.id);
      name = recipe.name
      imageUrl = recipe.imagePath
      recipeDescription = recipe.description
      if (recipe.ingredients) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      imagePath: new FormControl(imageUrl, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients
    });
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['ingredients'],
    // );
    if (this.allowEdit) {
      this.recipeServe.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeServe.addRecipe(this.recipeForm.value);
    }

    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddIngredient() {
    const name = new FormControl(null, Validators.required);
    const amount = new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]);

    const ingredient = new FormGroup({
      name: name,
      amount: amount
    });

    (<FormArray>this.recipeForm.get('ingredients')).push(ingredient);
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
