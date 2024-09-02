import { Component,  Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../../recipe.module';
import { DetailsRecipeService } from 'src/app/Components/services/details-recipe.service';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [CommonModule ,RouterLinkActive],
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
@Input({required:true}) recipe!:Recipe
constructor(private _DetailsRecipeService:DetailsRecipeService){}
   ngOnInit(): void {
   }
}
