import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { Ingredient } from 'src/app/Shared/ingredient.module';
import {  Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule , ShoppingEditComponent , FormsModule],
  // import { Ingredient } from './../../Shared/ingredient.module';
templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
intgredients:Ingredient[] =[];


private _subscibtion: Subscription =new Subscription()
constructor(
private _ShoppingListService:ShoppingListService ,


){}
ngOnInit(): void {
this.intgredients =this._ShoppingListService.getIngredients()
this._subscibtion =this._ShoppingListService.IngredientChange.subscribe((intgredients :Ingredient[])=>{
  this.intgredients = intgredients
})
}
onDateSelected(data:any) {
 this.intgredients.push(data)
}
onEditing(index:number){
  this._ShoppingListService.startedEditing.next(index)
}
ngOnDestroy(): void {
this._subscibtion.unsubscribe()
}
}
