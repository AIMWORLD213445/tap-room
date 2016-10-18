export class Keg {
  static MAXPINTS = 20;
  public pintsLeft:number = Keg.MAXPINTS;
  constructor(public name: string, public brand: string, public price : number, public alcoholContent:number){}
}
