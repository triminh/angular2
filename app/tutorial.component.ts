import {Component} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
    <h3 *ngIf="showLineIf">This ngIf directive line.</h3>
    <div [ngSwitch]="color">
        <p *ngSwitchCase="'red'">This line color is red</p>
        <p *ngSwitchCase="'blue'">This line color is blue</p>
        <p *ngSwitchCase="'green'">This line color is grreen</p>
        <p *ngSwitchDefault>Invalid color</p>
    </div>
    <ul>
        <li *ngFor="let color of colors">{{ color }}</li>
    </ul>


     `
})
export class TutorialComponent{
    public showLineIf =false;
    public color="red";

    public colors: string[] = ["red", "green", "blue"]; 
}