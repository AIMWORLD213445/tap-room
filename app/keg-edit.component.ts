import { Keg } from './keg.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="childChosenKeg">
    <h2>Edit Beer Information</h2>
    <div>
      <label>Edit Name</label>
      <input [(ngModel)]="childChosenKeg.name">
    </div>
    <div>
      <label>Edit Brand</label>
      <input [(ngModel)]="childChosenKeg.brand">
    </div>
    <div>
      <label>Edit Price</label>
      <input [(ngModel)]="childChosenKeg.price">
    </div>
    <div>
      <label>Edit ABV</label>
      <input [(ngModel)]="childChosenKeg.alcoholContent">
    </div>
    <div>
      <label>Fill Up</label>
      <input [(ngModel)]="childChosenKeg.pintsLeft">
    </div>
    <button class="btn btn-info" (click)="doneClicked()">Done</button>
  </div>
  `


})

export class KegEditComponent{
  @Input() childChosenKeg: Keg;
  @Output() doneClickSender = new EventEmitter();
  doneClicked(){
    this.doneClickSender.emit();
  }
}
