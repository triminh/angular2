import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
       <p>Child component: {{ name }}</p>

       <button [disabled]="voted" (click)="vote(true)">Agree</button>
       <button [disabled]="voted" (click)="vote(false)">Disagree</button>
       Result: {{ voted }}
    `
})
export class TutorialComponent{
  @Input() name:string;
  @Output() onVote = new EventEmitter<boolean>();

  public voted:boolean = false;

  setName(name:string) {
      this.name = name;
  }

  vote(agree:boolean) {
      this.voted = true;
      this.onVote.emit(agree);
  }
}