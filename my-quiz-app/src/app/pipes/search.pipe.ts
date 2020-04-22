import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(quizes: Array<any>, ...args: string[]): unknown {

    console.log(quizes);
    console.log(args)
    var name = args[0];
    var filteredList = quizes.filter((quiz)=> quiz.name.startsWith(name))
    return filteredList;
  }


}
