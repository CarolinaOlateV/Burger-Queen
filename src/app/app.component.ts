import { Component, OnInit } from '@angular/core';
import { Appear } from './clientName';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Burger-queen';

  clientName: Appear = {
  id: 1,
  name: 'Ingresar nombre de cliente'
}

  constructor() { }
 
  ngOnInit() {
  }
 
}

