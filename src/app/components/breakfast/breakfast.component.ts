import { Component, OnInit } from '@angular/core';
import { WaiterService } from '../../servicios/waiter.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  breakfast:any[] = []

  constructor(private _waiterServices:WaiterService) { }

  ngOnInit() {
    this.breakfast = this._waiterServices.getBreakfast();
  }

}
