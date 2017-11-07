import {Component} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
    <button (click)="OnClick($event)">Click me</button>
    <input type="text" #name />
     `
})
export class TutorialComponent{
   OnClick(value){
       console.log(value);
   }
}