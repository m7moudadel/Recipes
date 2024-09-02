import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRecipeService } from 'src/app/Components/services/details-recipe.service';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Recipe } from '../../recipe.module';
import { interval } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule ,RouterLink ],
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
constructor(
  private _DetailsRecipeService:DetailsRecipeService,
  private ActivatedRoute:ActivatedRoute,
  private _Router:Router
  ){}
   recipeSelected!:Recipe;
   id!:number
  ngOnInit(): void {
  this.ActivatedRoute.params.subscribe(
  {next:(Params:Params)=>{
this.id=  +Params['id']
this.recipeSelected = this._DetailsRecipeService.getRecipe(this.id)
    }
  }
  )
}

  onAddToShopping(){
  this._DetailsRecipeService.onAddIngeredients(this.recipeSelected.ingredients)
  }

  onEditRecipe(){
    this._Router.navigate(['edit'] , {relativeTo: this.ActivatedRoute})
  }
  onDeleteRecipe(){
    this._DetailsRecipeService.deleteRecipe(this.id)
     this._Router.navigate(['../'] , {relativeTo:this.ActivatedRoute})
  }
}
