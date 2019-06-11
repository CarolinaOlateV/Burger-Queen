import { Component, OnInit } from '@angular/core';
import { WaiterService } from '../../servicios/waiter.service'; 

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
})
export class WaiterComponent implements OnInit {
  
  breakfast:any[] = [];

  constructor( private _waiterService:WaiterService ) {
    console.log('constructor');
   }

  ngOnInit() {
    this.breakfast = this._waiterService.getBreakfast();
    console.log(this.breakfast);
  }

}
