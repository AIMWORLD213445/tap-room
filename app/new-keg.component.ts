import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template:
  `
  <h1> Enter a new keg</h1>
  <div>
    <label> Enter keg name</label>
    <input #newName>
  </div>
  <div>
    <label> Enter keg brand</label>
    <input #newBrand></div>
  <div>
    <label> Enter keg price</label>
    <input #newPrice></div>
  <div>
    <label> Enter keg % alcohol content</label>
    <input #newAlcoholContent></div>
  <div>
  <button class = "btn btn-danger" (click) = "addClicked(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value)">Add Keg</button>
`
})


export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, alcoholContent: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
    this.newKegSender.emit(newKegToAdd);
  }
}
