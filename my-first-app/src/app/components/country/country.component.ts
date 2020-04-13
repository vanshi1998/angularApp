import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   handleLoadedEvent(cities: Array<string>){
    console.log('In parent country component...', cities)
    this.city = cities
  }
  city:Array<string>

}
