"use strict";(self.webpackChunkshopping=self.webpackChunkshopping||[]).push([[756],{1756:(Z,u,r)=>{r.r(u),r.d(u,{ShoppingListComponent:()=>S});var c=r(6814),o=r(95),g=r(6107),m=r(7394),t=r(4946),l=r(6360);const h=["f"];function f(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",15),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.deleteFrom())}),t._uU(1,"Delete"),t.qZA()}}let b=(()=>{class n{constructor(e){this._ShoppingListService=e,this.subscribtion=new m.w0,this.editeMode=!1}ngOnInit(){this._ShoppingListService.startedEditing.subscribe(e=>{this.editeMode=!0,this.editeItemIndex=e,this.editeItem=this._ShoppingListService.getIngredient(e),this.slFrom.setValue({name:this.editeItem.name,amount:this.editeItem.amount})})}onSubmit(e){let i=e.value,s=new g.o(i.name,i.amount);this.editeMode?this._ShoppingListService.updateIngredient(this.editeItemIndex,s):this._ShoppingListService.addIngredient(s),this.editeMode=!1,this.slFrom.reset()}clearFrom(){this.editeMode=!1,this.slFrom.reset()}deleteFrom(){this._ShoppingListService.deleteIngredient(this.editeItemIndex),this.clearFrom()}ngOnDestroy(){this.subscribtion.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(l._))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-shopping-edit"]],viewQuery:function(i,s){if(1&i&&t.Gf(h,7),2&i){let p;t.iGM(p=t.CRH())&&(s.slFrom=p.first)}},standalone:!0,features:[t.jDz],decls:22,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["recipeRef",""],[1,"col-xs-12","my-2"],["type","submit",1,"btn","btn-success","me-1",3,"disabled"],["class","btn btn-primary ms-1","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-danger","ms-1",3,"click"],["type","button",1,"btn","btn-primary","ms-1",3,"click"]],template:function(i,s){if(1&i){const p=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(p);const v=t.MAs(3);return t.KtG(s.onSubmit(v))}),t.TgZ(4,"div",0)(5,"div",4)(6,"label",5),t._uU(7,"Name"),t.qZA(),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",7)(10,"label",8),t._uU(11,"amount"),t.qZA(),t._UZ(12,"input",9,10),t.qZA(),t.TgZ(14,"div",0)(15,"div",11)(16,"div")(17,"button",12),t._uU(18),t.qZA(),t.YNc(19,f,2,0,"button",13),t.TgZ(20,"button",14),t.NdJ("click",function(){return s.clearFrom()}),t._uU(21,"Cealr"),t.qZA()()()()()()()()}if(2&i){const p=t.MAs(3);t.xp6(17),t.Q6J("disabled",!p.valid),t.xp6(1),t.Oqu(s.editeMode?"update":"Add"),t.xp6(1),t.Q6J("ngIf",s.editeMode)}},dependencies:[c.ez,c.O5,o.UX,o._Y,o.Fj,o.wV,o.JJ,o.JL,o.Q7,o.c5,o.u5,o.On,o.F]})}return n})();function _(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"ul",3)(1,"a",4),t.NdJ("click",function(){const p=t.CHM(e).index,d=t.oxw();return t.KtG(d.onEditing(p))}),t.TgZ(2,"span"),t._uU(3),t.qZA()()()}if(2&n){const e=a.$implicit;t.xp6(3),t.AsE("\n",e.name,"(",e.amount,") ")}}let S=(()=>{class n{constructor(e){this._ShoppingListService=e,this.intgredients=[],this._subscibtion=new m.w0}ngOnInit(){this.intgredients=this._ShoppingListService.getIngredients(),this._subscibtion=this._ShoppingListService.IngredientChange.subscribe(e=>{this.intgredients=e})}onDateSelected(e){this.intgredients.push(e)}onEditing(e){this._ShoppingListService.startedEditing.next(e)}ngOnDestroy(){this._subscibtion.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(l._))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-shopping-list"]],standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"row"],[1,"col-s-10"],["class","list-group",4,"ngFor","ngForOf"],[1,"list-group"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-shopping-edit"),t.qZA(),t._UZ(3,"hr"),t.YNc(4,_,4,2,"ul",2),t.qZA()),2&i&&(t.xp6(4),t.Q6J("ngForOf",s.intgredients))},dependencies:[c.ez,c.sg,b,o.u5]})}return n})()}}]);