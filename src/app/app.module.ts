import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { LocalizeRouterModule } from "@gilsdav/ngx-translate-router";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./module1/module1.module").then(m => m.Module1),
    data: { discriminantPathKey: "Module1" }
  },
  {
    path: "",
    loadChildren: () => import("./module2/module2.module").then(m => m.Module2),
    data: { discriminantPathKey: "Module2" }
  },

];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot(routes, {
      enableTracing: false,
      initialNavigation: "disabled",
      relativeLinkResolution: "corrected"
    }),
    LocalizeRouterModule.forRoot(routes, {
      initialNavigation: true
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
