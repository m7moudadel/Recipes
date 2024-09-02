import { Component,  ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Ingredient } from 'src/app/Shared/ingredient.module';
import { ShoppingListService } from '../../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule ,FormsModule],
templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('f' , {static:true}) slFrom!: NgForm;
  subscribtion:Subscription=new Subscription()
  editeMode=false
  editeItem!:Ingredient
  editeItemIndex!:number;
constructor(private _ShoppingListService:ShoppingListService  ){}

ngOnInit(): void {
  this._ShoppingListService.startedEditing.subscribe(
    (index)=>{
      this.editeMode=true
      this.editeItemIndex=index
      this.editeItem = this._ShoppingListService.getIngredient(index);
      this.slFrom.setValue({
       name:this.editeItem.name,
       amount:this.editeItem.amount
      })
    }
  )
}
  onSubmit(form:NgForm){
    let value =form.value
    let newIngredint = new Ingredient(value.name , value.amount)
    if(this.editeMode){
          this._ShoppingListService.updateIngredient(this.editeItemIndex ,newIngredint)
    }else{
      this._ShoppingListService.addIngredient(newIngredint)
    }
    this.editeMode=false
    this.slFrom.reset()
  }
  clearFrom(){
    this.editeMode =false;
    this.slFrom.reset()
  }
  deleteFrom(){
  this._ShoppingListService.deleteIngredient(this.editeItemIndex)
  this.clearFrom()
  }

  ngOnDestroy(): void {
this.subscribtion.unsubscribe()

  }
}
