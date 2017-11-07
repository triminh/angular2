import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{ title }}</h1>
  <img [src]="image" />
  <my-tutorial></my-tutorial>
  <Input type="text" [value]="welcomeText" />
  `
})
export class AppComponent {
   public title = "Tedu chanel";
   
   //property bindding
   public image = "http://lorempixel.com/300/300";

   public welcomeText = "Welcome to Angular 2 for beginner";

 }