import { Injectable } from '@angular/core';

@Injectable()
export class WaiterService {
    private breakfast:any[] = [
        {
          name: "Café americano",
          price: "$500"
        },
        {
          name: "Café con leche",
          price: "$700",
        },
        {
          name: "Sandwich de jamón y queso",
          price: "$1000",
        },
        {
          name: "Jugo natural",
          price: "$700",
        }
    
      ]


    constructor() {
        console.log("Servicio listo");
     }

     getBreakfast(){
         return this.breakfast
     }

}