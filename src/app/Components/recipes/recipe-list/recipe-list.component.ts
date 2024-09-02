import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-details/recipe-item/recipe-item.component';
import { Recipe } from '../recipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { HeaderComponent } from "../../header/header.component";
import { DetailsRecipeService } from '../../services/details-recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RecipeItemComponent, RouterLink, RouterLinkActive, RecipeDetailsComponent, HeaderComponent ,RouterOutlet],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  constructor(private _DetailsRecipeService:DetailsRecipeService ,
    private _ActivatedRoute:ActivatedRoute,
     private  _RecipeList :DetailsRecipeService,
  private _Router:Router ){}
 recipes!:Recipe []
  id!:number
ngOnInit(): void {

this._RecipeList.recipeChanged.subscribe(
  (recipe:Recipe[])=>{
      this.recipes= recipe;

  }
)

this.recipes= this._DetailsRecipeService.getRecipes()

}



onNewRecipe(){
 this._Router.navigate(['new'] , {relativeTo: this._ActivatedRoute})
}
}
