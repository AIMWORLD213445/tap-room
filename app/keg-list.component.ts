import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector:'keg-list',
  template:`
  <div *ngFor="let currentKeg of childKegList">
    <div [style.background-color]="getStyle(currentKeg)">
      <h3> {{ currentKeg.name }}  </h3>
      <h4>{{ currentKeg.brand }}</h4>
      <li>$ {{ currentKeg.price }}.00</li>
      <li>ABV {{ currentKeg.alcoholContent }}%</li>
      <li>Pints Left: {{ currentKeg.pintsLeft }}</li>
      <button class="btn btn-primary" (click) = "editButtonClicked(currentKeg)"> Edit Keg</button>
      <button class="btn btn-danger"(click) = "buyPint(currentKeg)"> Buy a pint!</button>
      <button class="btn btn-success"(click) = "refill(currentKeg)"> Fill Keg!</button>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  editButtonClicked (kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  buyPint(pickedKeg: Keg){
    if(pickedKeg.pintsLeft>0){
      pickedKeg.pintsLeft--;
    }else{
      alert("Refill");
    }
  }

  getStyle(pickedKeg:Keg){
    if(pickedKeg.pintsLeft>5){
      return "blue";
    }else{
      return "red";
    }
  }

  refill(pickedKeg: Keg){
    pickedKeg.pintsLeft=15;
  }
}
