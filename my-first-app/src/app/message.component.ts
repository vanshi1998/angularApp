import { Component } from '@angular/core';
@Component({
  selector: 'my-msg',
  template: `
  <h2>Welcome to: {{text}}</h2>
  `
})
export class MessageComponent
{
   text : string = 'My first app';
}