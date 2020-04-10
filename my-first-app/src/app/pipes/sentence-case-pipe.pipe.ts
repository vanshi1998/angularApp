import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCasePipe'
})
export class SentenceCasePipePipe implements PipeTransform {

  transform(sentence: string, ...args: unknown[]): unknown {

    console.log('In Sentence Case Pipe',sentence);
  var sent = sentence.charAt(0) + sentence.substring(1).toLowerCase();
  sentence=sent[0].toUpperCase()+sent.slice(1);
  return sentence;
  }

}
