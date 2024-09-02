import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-list/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { EditRecipeComponent } from './recipe-list/recipe-details/edit-recipe/edit-recipe.component';
import { RouterOutlet } from '@angular/router';
import { Recipe } from './recipe.module';
import { DetailsRecipeService } from '../services/details-recipe.service';
import { StartRecipeComponent } from './start-recipe/start-recipe.component';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule ,
    RecipeDetailsComponent,
    RouterOutlet
      ,RecipeListComponent ,
      EditRecipeComponent,
      RecipeDetailsComponent,
    StartRecipeComponent
    ],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe!:Recipe;
  constructor(private _DetailsRecipeService:DetailsRecipeService){}

  ngOnInit(): void {
  this._DetailsRecipeService.recipeSelected.subscribe((recipe:Recipe)=>{
    this.selectedRecipe=recipe
  })
  }

}
