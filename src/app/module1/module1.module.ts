import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";
import {  TranslateModule } from "@ngx-translate/core";
import { HomeComponent } from "./home.component";
import { Module1Component } from "./module1.component";

const routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'module1',
    component: Module1Component,
  },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
    TranslateModule.forChild(),
  ],
  declarations: [Module1Component, HomeComponent],
  bootstrap: []
})
export class Module1 {}
