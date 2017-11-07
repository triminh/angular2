import {Component} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `<h2>tutorial component</h2>
    <h3 [class.redColor] = "applyClass">ApplyCLass</h3>
    <h4 [style.color]="blueColor?'blue':'orange'">Apply style</h4>
    `,
    styles:[`.redColor{
        color: red;
    }`]
})
export class TutorialComponent{
   public applyClass = true;
   public blueColor = false; 
}