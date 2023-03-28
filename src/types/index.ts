export interface Order {
    id: number;
    date: Date;
    price: number;
  }
  
  export interface Brand {
    name: string;
    orders: Order[];
  }
  