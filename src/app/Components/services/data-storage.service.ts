import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetailsRecipeService } from './details-recipe.service';
import { exhaustMap, map, Observable, pipe, take, tap } from 'rxjs';
import { Recipe } from '../recipes/recipe.module';
import { Ingredient } from 'src/app/Shared/ingredient.module';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
     private _HttpClient:HttpClient ,
     private _DetailsRecipeService:DetailsRecipeService,
    private _AuthService:AuthService) { }

  dataStorage():Observable<any>{
    let recipes =this._DetailsRecipeService.getRecipes()
  return this._HttpClient.put("https://ng-course-recipe-book-5b9ac-default-rtdb.firebaseio.com/recipes.json?auth=null",recipes)
  }
  FetchData():Observable<any>{
  return  this._AuthService.user.pipe(
    take(1),
    exhaustMap(user =>{
      return this._HttpClient.get<Recipe[]>(
        "https://ng-course-recipe-book-5b9ac-default-rtdb.firebaseio.com/recipes.json?auth="
        + user?.token
      )

    }),
      map(recipes=>{
      return recipes.map(recipe=>{
        return {
          ...recipe ,
          ingredients: recipe.ingredients ? recipe.ingredients :[] }
      })
    }),tap(
      response=>{
  this._DetailsRecipeService.setRecipes(response)

      }
    ))

}
}
