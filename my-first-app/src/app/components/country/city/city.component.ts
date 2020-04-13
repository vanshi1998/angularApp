import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonService } from "src/app/services/common.service";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(public commonService:CommonService) { }

  ngOnInit(): void {
    
  }

  onLoadCountry()
  {
    if(this.con==='india')
    this.commonService.fetchIndia()
    .then((res: Array<string>) =>{
      console.log("Indian cities")
      console.log(res);
      this.cities=res;
      this.loaded.emit(this.cities);
      })
    else
    this.commonService.fetchUSA()
     .then((res: Array<string>) =>{
      console.log("USA cities")
      console.log(res);
      this.cities=res;
      this.loaded.emit(this.cities);
      })


  }

@Input('con')con:string=""
cities:Array<string>=[]
@Output('loaded') loaded: EventEmitter<Array<string>>= new EventEmitter();



}
