"use strict";(self.webpackChunkblockcore_dapp=self.webpackChunkblockcore_dapp||[]).push([[775],{775:(j,u,n)=>{n.r(u),n.d(u,{AccountModule:()=>Y});var m=n(9808),p=n(428),g=n(1271),e=n(5e3),P=n(2313),c=n(7093),f=n(9224),h=n(3251),a=n(3075),w=n(263),v=n(2838),C=n(4649),x=n(1645),Z=n(5245),y=n(7423),d=n(3489),A=n(7531);function N(o,s){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a your current password "),e.qZA())}function T(o,s){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a new password "),e.qZA())}function S(o,s){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Please confirm your new password "),e.qZA())}let U=(()=>{class o{constructor(r,t,i,l){this.authService=r,this.logger=t,this.spinnerService=i,this.notificationService=l,this.hideCurrentPassword=!0,this.hideNewPassword=!0}ngOnInit(){var r,t,i;this.form=new a.cw({currentPassword:new a.NI("",a.kI.required),newPassword:new a.NI("",a.kI.required),newPasswordConfirm:new a.NI("",a.kI.required)}),null===(r=this.form.get("currentPassword"))||void 0===r||r.valueChanges.subscribe(l=>{this.currentPassword=l}),null===(t=this.form.get("newPassword"))||void 0===t||t.valueChanges.subscribe(l=>{this.newPassword=l}),null===(i=this.form.get("newPasswordConfirm"))||void 0===i||i.valueChanges.subscribe(l=>{this.newPasswordConfirm=l}),this.spinnerService.visibility.subscribe(l=>{this.disableSubmit=l})}changePassword(){if(this.newPassword!==this.newPasswordConfirm)return void this.notificationService.openSnackBar("New passwords do not match.");const r=this.authService.getCurrentUser().email;this.authService.changePassword(r,this.currentPassword,this.newPassword).subscribe(t=>{this.logger.info(`User ${r} changed password.`),this.form.reset(),this.notificationService.openSnackBar("Your password has been changed.")},t=>{this.notificationService.openSnackBar(t.error)})}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(w.$),e.Y36(v.Kf),e.Y36(C.V),e.Y36(x.g))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-change-password"]],decls:22,vars:11,consts:[[3,"formGroup"],["fxLayout","row"],["fxFlex","40%","fxFlex.md","60%","fxFlex.sm","50%","fxFlex.xs","100%"],[1,"full-width"],["matInput","","placeholder","Current Password","formControlName","currentPassword","autocomplete","current-password",3,"type"],["matSuffix","",3,"click"],[4,"ngIf"],["matInput","","placeholder","New Password","formControlName","newPassword","autocomplete","new-password",3,"type"],["matInput","","placeholder","Confirm New Password","formControlName","newPasswordConfirm","autocomplete","new-password",3,"type"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(r,t){1&r&&(e.TgZ(0,"form",0)(1,"p"),e._uU(2,"Use the form below to change your password."),e.qZA(),e.TgZ(3,"div",1)(4,"div",2)(5,"mat-form-field",3),e._UZ(6,"input",4),e.TgZ(7,"mat-icon",5),e.NdJ("click",function(){return t.hideCurrentPassword=!t.hideCurrentPassword}),e._uU(8),e.qZA(),e.YNc(9,N,2,0,"mat-error",6),e.qZA(),e.TgZ(10,"mat-form-field",3),e._UZ(11,"input",7),e.TgZ(12,"mat-icon",5),e.NdJ("click",function(){return t.hideNewPassword=!t.hideNewPassword}),e._uU(13),e.qZA(),e.YNc(14,T,2,0,"mat-error",6),e.qZA(),e.TgZ(15,"mat-form-field",3),e._UZ(16,"input",8),e.TgZ(17,"mat-icon",5),e.NdJ("click",function(){return t.hideNewPassword=!t.hideNewPassword}),e._uU(18),e.qZA(),e.YNc(19,S,2,0,"mat-error",6),e.qZA(),e.TgZ(20,"button",9),e.NdJ("click",function(){return t.changePassword()}),e._uU(21,"Save"),e.qZA()()()()),2&r&&(e.Q6J("formGroup",t.form),e.xp6(6),e.Q6J("type",t.hideCurrentPassword?"password":"text"),e.xp6(2),e.hij(" ",t.hideCurrentPassword?"visibility":"visibility_off"," "),e.xp6(1),e.Q6J("ngIf",t.form.controls.currentPassword.hasError("required")),e.xp6(2),e.Q6J("type",t.hideNewPassword?"password":"text"),e.xp6(2),e.hij(" ",t.hideNewPassword?"visibility":"visibility_off"," "),e.xp6(1),e.Q6J("ngIf",t.form.controls.newPassword.hasError("required")),e.xp6(2),e.Q6J("type",t.hideNewPassword?"password":"text"),e.xp6(2),e.hij(" ",t.hideNewPassword?"visibility":"visibility_off"," "),e.xp6(1),e.Q6J("ngIf",t.form.controls.newPasswordConfirm.hasError("required")),e.xp6(1),e.Q6J("disabled",t.form.invalid||t.disableSubmit))},dependencies:[m.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,c.xw,c.yH,Z.Hw,y.lW,d.TO,d.KE,d.R9,A.Nt],styles:[".password-rules[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%]{position:unset!important}.container[_ngcontent-%COMP%]{padding-top:20px}"]}),o})(),b=(()=>{class o{constructor(r){this.authService=r,this.fullName="",this.email="",this.alias=""}ngOnInit(){this.fullName=this.authService.getCurrentUser().fullName,this.email=this.authService.getCurrentUser().email}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(w.$))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile-details"]],decls:8,vars:4,consts:[[1,"profile-card"],["src","assets/images/user.png",3,"alt"],[1,"title"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"h2",2),e._uU(3),e.qZA(),e.TgZ(4,"label"),e._uU(5),e.qZA(),e.TgZ(6,"label"),e._uU(7),e.qZA()()),2&r&&(e.xp6(1),e.Q6J("alt",t.fullName),e.xp6(2),e.hij(" ",t.fullName," "),e.xp6(2),e.hij(" ",t.alias," "),e.xp6(2),e.hij(" ",t.email," "))},styles:[".profile-card[_ngcontent-%COMP%]{text-align:center}"]}),o})();const J=[{path:"",component:g.$,children:[{path:"profile",component:(()=>{class o{constructor(r){this.titleService=r}ngOnInit(){this.titleService.setTitle("blockcore-dapp - Account")}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(P.Dx))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-account-page"]],decls:14,vars:0,consts:[["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],["fxLayout","row","fxLayout.sm","column","fxLayout.xs","column"],["fxFlex","30%","fxFlex.sm","95%","fxFlex.xs","95%"],["fxFlex",""],["fxFlex","65%","fxFlex.sm","95%","fxFlex.xs","950%"],["label","Change Password"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"mat-card")(3,"mat-card-content")(4,"h2"),e._uU(5,"My Profile"),e.qZA(),e.TgZ(6,"div",2)(7,"div",3),e._UZ(8,"app-profile-details"),e.qZA(),e._UZ(9,"div",4),e.TgZ(10,"div",5)(11,"mat-tab-group")(12,"mat-tab",6),e._UZ(13,"app-change-password"),e.qZA()()()()()()()())},dependencies:[c.xw,c.Wh,c.yH,f.a8,f.dn,h.SP,h.uX,U,b]}),o})()}]}];let I=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.Bz.forChild(J),p.Bz]}),o})();var M=n(1453);let Y=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,M.m,I]}),o})()}}]);