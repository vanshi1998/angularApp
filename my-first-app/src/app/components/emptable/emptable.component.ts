import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emptable',
  templateUrl: './emptable.component.html',
  styleUrls: ['./emptable.component.css']
})
export class EmptableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 @Input('name') name:string=""
  @Input('salary') salary:number=null
  @Input('id') id:number=null;

}
