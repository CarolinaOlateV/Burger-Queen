import { Component, OnInit } from '@angular/core';
import { WaiterService } from '../../servicios/waiter.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  private breakfast:any[] = [];
  public menuToShow:any[]=[];

  public filterBy:string='Lunch';

  constructor(private _waiterServices:WaiterService) { 

  }

  ngOnInit() {
    this.breakfast = this._waiterServices.getBreakfast();
    this.updateMenuToShow();
    // console.log(this.breakfast);
  }

  updateMenuToShow(): void {
    this.menuToShow = this.breakfast.filter(item => item.Type == this.filterBy);
  }

  handleBreakfastClick(){
    this.filterBy = 'Breakfast';
    this.updateMenuToShow()
  }

  handleLunchClick(){
    this.filterBy = 'Lunch';
    this.updateMenuToShow()
  }

}
