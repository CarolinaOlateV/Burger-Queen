import { Injectable } from '@angular/core';

@Injectable()
export class WaiterService {
    private breakfast:any[] = [
      {
    Type:"Breakfast",
    name: "Cafe Americano",
    price: "$500",
    },
    
    {
    Type:"Breakfast",
    name: "Cafe con leche",
    price: "$700",
    },
    
    {
    Type:"Breakfast",
    name: "Sandwich de jamón y queso",
    price: "$1000",
    },
    
    {
    Type:"Breakfast",
    name: "Jugo natural",
    price: "$700",
    },
    
    {
    Type:"Lunch",
    name: "Hamburguesa Simple",
    price: "$1500",
    },
    
    {
    Type:"Lunch",
    name: "Hamburguesa Doble",
    price: "$2500",
    },
    
    {
    Type:"Lunch",
    name: "Papas fritas",
    price: "$500",
    },
    
    {
    Type:"Lunch",
    name: "Onion Rings",
    price: "$500",
    },
    
    {
    Type:"Lunch",
    name: "Gaseosa 500ml",
    price: "$700",
    },
    
    {
    Type:"Lunch",
    name: "Agua 500ml",
    price: "$500",
    },
    {
    Type:"Lunch",
    name: "Gaseosa 750ml",
    price: "$800",
    },
    
    {
    Type:"Lunch",
    name: "Agua 750ml",
    price: "$1000",
    }
    ];


    constructor() {
        console.log("Servicio listo");
     }

     getBreakfast(){
         return this.breakfast
     }
     

}