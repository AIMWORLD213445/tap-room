import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector:'keg-list',
  template:`
  <div class=row>
    <div class="col-sm-4">
      <label>Show by ABV</label>
      <select class="form-control"(change)="changeABV($event.target.value)">
        <option value="all">All</option>
        <option value="under-8">ABV Under 8%</option>
        <option value="over-8">ABV Over 8%</option>
      </select>
    </div>
    <div class="col-sm-4">
      <label>Show by Price</label>
      <select class="form-control" (change)="changePrice($event.target.value)">
        <option value="all">All</option>
        <option value="under-5">Price Under $5</option>
        <option value="over-5">Price Over $5</option>
      </select>
    </div>
  </div>

  <div class="col-sm-4"*ngFor="let currentKeg of childKegList | abv:selectedABV | price:selectedPrice">
    <div class="beer-info"[style.background-color]="getBackgroundColor(currentKeg)" [style.font-family] = "getFont(currentKeg)">
      <h3> {{ currentKeg.name }}
      <h4>{{ currentKeg.brand }}</h4>
      <h6>$ {{ currentKeg.price }}.00</h6>
      <h6>ABV {{ currentKeg.alcoholContent }}%</h6>
      <h6>Pints Left: {{ currentKeg.pintsLeft }}</h6></h3>
      <button class="btn btn-primary" (click) = "editButtonClicked(currentKeg)"> Edit Keg</button>
      <button class="btn btn-danger"(click) = "buyPint(currentKeg)"> Buy a pint!</button>
      <button class="btn btn-success"(click) = "refill(currentKeg)">New Keg!</button>
    </div>
  </div>
  `
})

export class KegListComponent {
  public selectedABV: string = "all";
  public selectedPrice: string = "all";
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

  changeABV(selectedOption: string){
    this.selectedABV = selectedOption
    console.log(this.selectedABV);
  }

  changePrice(selection: string){
    this.selectedPrice = selection;
  }


  getBackgroundColor(pickedKeg:Keg){
    if(pickedKeg.pintsLeft>10){
      return "rgba(51, 153, 255, 0.7)";
    }else{
      return "rgba(255, 51, 0, 0.7)";
    }
  }

  getFont(pickedKeg:Keg){
    if(pickedKeg.price>5){
      return "cursive";
    }else{
      return "sans serif";
    }
  }

  refill(pickedKeg: Keg){
    pickedKeg.pintsLeft=15;
  }
}
