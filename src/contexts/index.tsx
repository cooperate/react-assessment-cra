import { createContext } from "react";
import { Brand, Order } from "../types";

export const OrderContext = createContext<Order>({
  id: 0,
  date: new Date(),
  price: 0,
});
export const BrandsContext = createContext<Brand[]>([
  {
    name: "",
    orders: [
      {
        id: 0,
        date: new Date(),
        price: 0,
      },
    ],
  },
]);
export const BrandsDispatchContext = createContext<React.Dispatch<any> | null>(
  null
);