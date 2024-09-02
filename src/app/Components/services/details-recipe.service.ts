import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.module';
import { Ingredient } from 'src/app/Shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsRecipeService {

  constructor(private _ShoppingListService:ShoppingListService) { }
  public   recipeChanged:Subject<Recipe[]> = new Subject<Recipe[]>()
  // recipeChanged:BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([])
  recipeSelected=new EventEmitter<Recipe>()
  private recipes:Recipe []=[
    new Recipe('Best Beef Burger Recipe'
       , 'There are so many different ways to make a nice juicy beef burger. ¼ medium red onion minced.'
       , 'https://images.tmbi.com/wp-content/uploads/wwwroot/toh/images/photos/37/1200x1200/exps41063_sd163614d12_01_3b.jpg',
       [
      new Ingredient('Meat' , 2),
      new Ingredient('Chicken' , 20)
    ]),
    new Recipe('Barbecue Burger' ,
      'This barbecue burger makes a quick and easy weeknight dinner' ,
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS.jpg',
      [
      new Ingredient('Meat' , 25),
      new Ingredient('Chicken' , 50)
    ])
   ]

  // private recipes: Recipe[]=[]

  setRecipes(recipes:Recipe[]){
   this.recipes= recipes
    this.recipeChanged.next( this.recipes.slice())
  }
  getRecipes(){
    return this.recipes.slice()
  }

  getRecipe(id:number){
    return this.recipes.slice()[id]
 }

  onAddIngeredients(ingredients:Ingredient[]){
    this._ShoppingListService.addShoppingIngredients(ingredients)
  }

  addNewRecipe(recipe:Recipe){
      this.recipes.push(recipe)
      this.recipeChanged.next(this.recipes.slice())
  }

  updateRecipe(index:number , newRecipe:Recipe){
    this.recipes[index]= newRecipe;
    this.recipeChanged.next(this.recipes.slice())


  }

  deleteRecipe(index:number){
    this.recipes.splice(index ,1)
    this.recipeChanged.next(this.recipes.slice())
  }
}
