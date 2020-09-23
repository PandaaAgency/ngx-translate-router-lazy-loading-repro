import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";

import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";
import { TranslateModule } from "@ngx-translate/core";
import { Module2Component } from "./module2.component";

const routes = [
  {
    path: "module2",
    component: Module2Component
  }
]; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: []
})
export class Module2 {}
