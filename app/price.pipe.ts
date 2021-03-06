import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "price",
  pure: false
})
export class PricePipe implements PipeTransform {
  transform (input: Keg[], selection: string) {
    var output:Keg[] = [];
      if (selection === 'under-5' ){
        for (var i=0; i<input.length; i++) {
          if(input[i].price<5) {
            output.push(input[i]);
        }
      }
       return output;
    } else if( selection ==='over-5'){
        for (var i=0; i<input.length; i++) {
          if(input[i].price>=5) {
            output.push(input[i]);
        }
      }
       return output;
    }else{
      return input;
    }
    }
  }
