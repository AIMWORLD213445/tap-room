import { Component } from '@angular/core';
import { Keg } from './keg.model';
const MAXPINTS = 25;
@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>My Second Angular 2 App</h1>
    </div>
    <div class="row">
      <keg-list [childKegList]="masterKeg"
        (clickSender) = "showDetails($event)"></keg-list>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <new-keg (newKegSender) = "addKeg($event)"></new-keg>
      </div>
      <div class="col-sm-6">
        <edit-keg [childChosenKeg] = "selectedKeg"(doneClickSender)="finishedEdit()"></edit-keg>
      </div>

    </div>


  </div>
  `
})

export class AppComponent {
  public masterKeg: Keg[] =[
    new Keg('Good Morning','Tree House Brewing Company',10,8.4),
    new Keg('Heady Topper','The Alchemist',8,8.1),
    new Keg('ManBeerPig','Voodoo Brewing Company',6,14.1),
    new Keg('Very Hazy', 'Tree House Brewing Company',4,8.6),
    new Keg('Dinner', 'Maine Beer Company',3,8.2),
    new Keg('Julius', 'Tree House Brewing Company',2,6.8),
    new Keg('Focal Banger', 'The Alchemist',1,7.1)
  ]
  selectedKeg: Keg = null;
  showDetails(clickedKeg: Keg){
    this.selectedKeg = clickedKeg;
  }

  finishedEdit(){
    this.selectedKeg = null;
  }

  addKeg (newKeg: Keg){
    this.masterKeg.push(newKeg);
  }
}
