import { Ingredient } from "src/app/Shared/ingredient.module";

export class Recipe {
  public name!:string;
  public describtion!:string;
  public imagePath!:string;
  public id!:string;
  public ingredients!:Ingredient[];

  constructor( name:string, desc:string , imagePath:string , ingredients:Ingredient[]){
this.name=name;
this.describtion=desc;
this.imagePath =imagePath;
this.ingredients =ingredients
  }
}
