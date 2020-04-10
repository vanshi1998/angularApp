import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCasePipe'
})
export class SentenceCasePipePipe implements PipeTransform {

  transform(sentence: string, ...args: unknown[]): unknown {

    console.log('In Sentence Case Pipe',sentence);
   sentence=sentence[0].toUpperCase() +  
            sentence.slice(1);
    return sentence;
  }

}
