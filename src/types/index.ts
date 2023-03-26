export interface Order {
    date: string;
    price: number;
  }
  
  export interface Brand {
    name: string;
    orders: Order[];
  }
  