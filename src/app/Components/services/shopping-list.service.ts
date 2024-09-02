import { Injectable } from '@angular/core';
import { Ingredient } from './../../Shared/ingredient.module';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
IngredientChange =new Subject<Ingredient[]>()
startedEditing = new Subject<number>()
private ingredients:Ingredient[]=[
  {  name:'Apple',
    amount:2
  },
  {
    name:'Banans',
    amount:20
  }
  ]

  getIngredients(){
    return this.ingredients.slice()
  }

  getIngredient(index:number){
    return this.ingredients[index]
  }
  addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient)
        this.IngredientChange.next( this.ingredients.slice())
  }
updateIngredient(index:number , newIngredient:Ingredient){
  this.ingredients[index]= newIngredient;
  this.IngredientChange.next(this.ingredients.slice())
}

deleteIngredient(index:number ){
  this.ingredients.splice(index ,1)
  this.IngredientChange.next(this.ingredients.slice())
}
  addIngredients(ingredient:Ingredient[]){
    this.ingredients.push(...ingredient)
    this.IngredientChange.next(this.ingredients.slice())
  }

  addShoppingIngredients(ingerdients:Ingredient[]){


  this.ingredients.push(...ingerdients)
  }
}

