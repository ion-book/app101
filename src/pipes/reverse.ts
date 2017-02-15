import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'reverse'
})
@Injectable()
export class ReversePipe {
  
  transform(value:string) {
    let resultado = '';
    for(let i = (value.length-1); i != 0; i--){
      resultado+=value[i];
    }
    return resultado;
  }
}
