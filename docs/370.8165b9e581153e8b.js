"use strict";(self.webpackChunkshopping=self.webpackChunkshopping||[]).push([[370],{8370:(R,m,i)=>{i.r(m),i.d(m,{RegisterComponent:()=>I});var r=i(95),g=i(6814),p=i(7540),u=i(5256),e=i(4946),c=i(4308),d=i(2895);function f(t,l){1&t&&(e.TgZ(0,"div")(1,"p",15),e._UZ(2,"app-loading"),e.qZA()())}function v(t,l){if(1&t){const o=e.EpF();e.TgZ(0,"div")(1,"app-alert",16),e.NdJ("close",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.onHandleEror())}),e.qZA()()}if(2&t){const o=e.oxw();e.xp6(1),e.Q6J("message",o.messageError)}}function h(t,l){1&t&&(e.TgZ(0,"span",18),e._uU(1," Email is rquired "),e.qZA())}function T(t,l){1&t&&(e.TgZ(0,"span",18),e._uU(1," Email is Not correct "),e.qZA())}function E(t,l){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,h,2,0,"span",17),e.YNc(2,T,2,0,"span",17),e.qZA()),2&t){const o=e.oxw();let s,n;e.xp6(1),e.Q6J("ngIf",null==(s=o.form.get("email"))?null:s.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=o.form.get("email"))?null:n.getError("email"))}}function Z(t,l){1&t&&(e.TgZ(0,"span",18),e._uU(1," this password is required "),e.qZA())}function x(t,l){1&t&&(e.TgZ(0,"span",18),e._uU(1," Must be 6 char minimum "),e.qZA())}function C(t,l){1&t&&(e.TgZ(0,"span",18),e._uU(1," Must be 10 characters maximum "),e.qZA())}function A(t,l){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,Z,2,0,"span",17),e.YNc(2,x,2,0,"span",17),e.YNc(3,C,2,0,"span",17),e.qZA()),2&t){const o=e.oxw();let s,n,a;e.xp6(1),e.Q6J("ngIf",null==(s=o.form.get("password"))?null:s.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=o.form.get("password"))?null:n.getError("minlength")),e.xp6(1),e.Q6J("ngIf",null==(a=o.form.get("password"))?null:a.getError("maxlength"))}}let I=(()=>{class t{constructor(o,s){this._AuthService=o,this._Router=s,this.isLoading=!1,this.messageError=null,this.form=new r.cw({email:new r.NI("",[r.kI.required,r.kI.email]),password:new r.NI("",[r.kI.required,r.kI.minLength(6),r.kI.maxLength(10)])})}onSubmit(){const o=this.form.get("email")?.value,s=this.form.get("password")?.value;this.isLoading=!0,this._AuthService.regitser(o,s).subscribe(n=>{console.log(n),this._Router.navigate(["/login"]),this.isLoading=!1},n=>{this.isLoading=!1,this.messageError=n}),this.form.reset()}onHandleEror(){this.messageError=null}loginPage(){this._Router.navigate(["/login"])}static#e=this.\u0275fac=function(s){return new(s||t)(e.Y36(c.e),e.Y36(d.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-auth"]],standalone:!0,features:[e.jDz],decls:24,vars:6,consts:[[1,"w-75","mx-auto","my-5"],[1,"col-xs-12","col-md-12"],[4,"ngIf"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"item-group"],["for","email"],["type","email","id","email","formControlName","email",1,"form-control"],["for","password"],["type","password","id","password","formControlName","password",1,"form-control"],[1,"my-2","d-flex","justify-content-between"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"register-btn"],[3,"click"],["width","20","src","./assets/arrow-small-left.svg","alt","arrow-left"],[1,"text-center","align-items-center"],[3,"message","close"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(s,n){if(1&s&&(e.TgZ(0,"section",0)(1,"div",1),e.YNc(2,f,3,0,"div",2),e.TgZ(3,"div",3),e.YNc(4,v,2,1,"div",2),e.TgZ(5,"form",4),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(6,"div",5)(7,"label",6),e._uU(8,"Email"),e.qZA(),e._UZ(9,"input",7),e.YNc(10,E,3,2,"div",2),e.qZA(),e.TgZ(11,"div",5)(12,"label",8),e._uU(13,"password"),e.qZA(),e._UZ(14,"input",9),e.YNc(15,A,4,3,"div",2),e.qZA(),e.TgZ(16,"div",10)(17,"button",11),e._uU(18,"Sign Up"),e.qZA(),e.TgZ(19,"button",12)(20,"a",13),e.NdJ("click",function(){return n.loginPage()}),e.TgZ(21,"span"),e._UZ(22,"img",14),e.qZA(),e._uU(23," Back To Login"),e.qZA()()()()()()()),2&s){let a,_;e.xp6(2),e.Q6J("ngIf",n.isLoading),e.xp6(2),e.Q6J("ngIf",n.messageError),e.xp6(1),e.Q6J("formGroup",n.form),e.xp6(5),e.Q6J("ngIf",(null==(a=n.form.get("email"))?null:a.errors)&&(null==(a=n.form.get("email"))?null:a.touched)),e.xp6(5),e.Q6J("ngIf",(null==(_=n.form.get("password"))?null:_.errors)&&(null==(_=n.form.get("password"))?null:_.touched)),e.xp6(2),e.Q6J("disabled",!n.form.valid)}},dependencies:[r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,g.ez,g.O5,p.N,u.w],styles:[".register-btn[_ngcontent-%COMP%]{all:unset;cursor:pointer;border-bottom:1px solid black}.register-btn[_ngcontent-%COMP%]:hover{color:#4169e1!important;border-bottom:1px solid royalblue}"]})}return t})()}}]);