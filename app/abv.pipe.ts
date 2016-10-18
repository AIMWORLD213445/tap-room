import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: 'abv',
  pure:false
})

export class ABVAmountPipe implements PipeTransform{
  transform(input:Keg[],selection){
    var output:Keg[]=[];
    console.log(selection);
    if(selection ==='under-8'){
      for(var i=0;i<input.length;i++){
        console.log(input[i].alcoholContent);
        if(input[i].alcoholContent<8){

          output.push(input[i]);
        }
      }
    }else if(selection==='over-8'){
      for(var i=0;i<input.length;i++){
        if(input[i].alcoholContent>=8){
          output.push(input[i]);
        }
      }
    }

    if(output.length>0){
      return output;
    }else{
      return input;
    }
  }
}
