import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(courses: Array<any>, ...args: string[]): unknown {

    console.log(courses);
    console.log(args)
    var name = args[0];
    var filteredList = courses.filter((course)=> course.name.startsWith(name))
    return filteredList;
  }

}
