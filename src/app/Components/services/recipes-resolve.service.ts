import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.module";
import { DataStorageService } from "./data-storage.service";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DetailsRecipeService } from "./details-recipe.service";

@Injectable({providedIn:'root'})
export class RecipeResolveService  implements Resolve<Recipe[]>
{
constructor(private _DataStorageService:DataStorageService,
  private _DetailsRecipeService:DetailsRecipeService
){}
resolve(route:ActivatedRouteSnapshot , state:RouterStateSnapshot){
  const recipes = this._DetailsRecipeService.getRecipes()
  if (recipes.length === 0) {
    return this._DataStorageService.FetchData()

  }else{
    return recipes;
  }
}
}
