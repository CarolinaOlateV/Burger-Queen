import { Component, OnInit } from '@angular/core';
import { OrderBreakfast } from '../menu-breakfast';
import { breakfast } from '../mock-breakfast';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {

  menu = breakfast;
  selectedBreakfast: OrderBreakfast;

  constructor() { }

  ngOnInit() {
    console.log(this.menu);
  }
  onSelect(waiter: OrderBreakfast): void {
    this.selectedBreakfast = waiter;
  }

}
