import { Component } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { DetailsRecipeService } from '../../services/details-recipe.service';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/Shared/ingredient.module';
import { CommonModule } from '@angular/common';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  standalone:true,
  imports:[ReactiveFormsModule ,CommonModule],
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {
  recipe!:Recipe[]
 constructor(
  private _Route:ActivatedRoute ,
  private _RecipeList:DetailsRecipeService,
private _Router:Router){}
id!:number;
editMode=false
recipeForm!:FormGroup
 ngOnInit(): void {
this._Route.params.subscribe(
  (params:Params)=>{
      this.id=params['id']
      this.editMode =params['id'] !=null

})

this.initForm()
}

onSubmit(){
if(this.editMode){
  this._RecipeList.updateRecipe(this.id , this.recipeForm.value)

}else{
  this._RecipeList.addNewRecipe(this.recipeForm.value)
}
this.onCancelled()
}

onAddIngredients(){
(<FormArray>this.recipeForm.get('ingredients')).push(
  new FormGroup({
    'name':new FormControl('' ,  Validators.required),
    'amount':new FormControl('' ,  [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)]),
  })
)
}

private initForm() {
  let recipeName = ''
  let recipeImagPath=''
  let describtion=''
  let recipeIngredients = new FormArray<FormGroup>([])
  if (this.editMode) {
     const recipe =this._RecipeList.getRecipe(this.id)
     recipeName =recipe.name
     recipeImagPath=recipe.imagePath
     describtion =recipe.describtion
//
     if( recipe && recipe.ingredients && Array.isArray(recipe.ingredients)){
      // recipeIngredients.clear();
      for (let ingredient of recipe.ingredients) {
        // Add a new FormGroup to the FormArray
        recipeIngredients.push(
          new FormGroup({
          'name': new FormControl(ingredient.name , Validators.required),
          'amount': new FormControl(ingredient.amount,  [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)])
        }))

        ;

   }
  }

  }


  this.recipeForm =new FormGroup({
    'name':new FormControl(recipeName , Validators.required),
    'imagePath': new FormControl(recipeImagPath, Validators.required),
    'describtion': new FormControl(describtion, Validators.required),
      'ingredients':recipeIngredients
  })
}


onCancelled(){
  this._Router.navigate(['../'],{relativeTo:this._Route})
}
}
