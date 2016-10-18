import { Keg } from './keg.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="childChosenKeg">
    <h2>Edit Beer Information</h2>
    <div class="form-group">
      <label>Edit Name</label>
      <input class="form-control" [(ngModel)]="childChosenKeg.name">
    </div>
    <div>
      <label>Edit Brand</label>
      <input class="form-control"  [(ngModel)]="childChosenKeg.brand">
    </div>
    <div>
      <label>Edit Price</label>
      <input class="form-control"  [(ngModel)]="childChosenKeg.price">
    </div>
    <div>
      <label>Edit ABV</label>
      <input class="form-control"  [(ngModel)]="childChosenKeg.alcoholContent">
    </div>
    <div>
      <label>Fill Up</label>
      <input class="form-control"  [(ngModel)]="childChosenKeg.pintsLeft">
    </div>
    <button class="btn btn-info  submit-button" (click)="doneClicked()">Done</button>
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
