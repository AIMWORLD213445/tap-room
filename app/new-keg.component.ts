import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template:
  `
  <h2> Enter a new keg</h2>
  <div class="form-group">
    <label> Enter keg name</label>
    <input class="form-control" #newName>
  </div>
  <div>
    <label> Enter keg brand</label>
    <input class="form-control" #newBrand></div>
  <div>
    <label> Enter keg price</label>
    <input class="form-control"  #newPrice></div>
  <div>
    <label> Enter keg % alcohol content</label>
    <input class="form-control"  #newAlcoholContent></div>
  <div>
  <button class = "btn btn-danger submit-button" (click) = "addClicked(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value)">Add Keg</button>
`
})


export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, alcoholContent: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
    this.newKegSender.emit(newKegToAdd);
  }
}
