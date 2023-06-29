import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letras'
})
export class LetrasPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args!=null){
      if(args == 'ingles'){
        switch(value){
          case 1: return 'one';
          case 2: return 'two';
          case 3: return 'three';
        }
      }
      if(args == 'portugues'){
        switch(value){
          case 1: return 'um';
          case 2: return 'dois';
          case 3: return 'trës';
        }
      }
    }
    switch(value){
      case 1: return 'uno';
      case 2: return 'dos';
      case 3: return 'tres';
    }
  }

}
