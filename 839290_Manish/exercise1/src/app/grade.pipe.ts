import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(value: number){
    if(value >= 70)
    return 'First class';
  else if(value>=35 && value<70)
    return 'Pass';
  else
    return 'Fail';
  }

}
