import { Component } from "@angular/core";

@Component({
  template: `
    <h1>HomeComponent</h1>

    <ul>
      <li>
        <a [routerLink]="'module1' | localize">
          Module 1
        </a>
      </li>
       <li>
        <a [routerLink]="'module2' | localize">
          Module 2
        </a>
      </li>
    </ul>
  `
})
export class HomeComponent {}
